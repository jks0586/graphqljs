import { users, quotes } from '../../../fakedb.js'
import { randomBytes } from 'crypto'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import Jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../../config.js'
const User = mongoose.model('User')
const Quote = mongoose.model('Quote')
const resolvers = {
  Query: {
    users: async () => await User.find({}),
    user: async (_, { _id }) => await User.findOne({ _id }),
    quotes: async () => await Quote.find({}).populate('by', '_id firstName'),
    uquotes: async (_, args,{userId}) => await Quote.find({ by:userId }),
    myprofile: async (_, args, { userId }) => {
      if (!userId) throw new Error('You must be Logedin ')
      return await User.findOne({ _id: userId })
    }
  },
  User: {
    quotes: async (_, args,{userId}) => {
      return await Quote.find({ by: userId })
    }
  },

  Mutation: {
    signupUser: async (_, { UserNew }) => {
      const user = await User.findOne({ email: UserNew.email })
      if (user) {
        throw new Error(`This Email  is already exist`)
      }
      const hashPassword = await bcrypt.hash(UserNew.password, 12)
      const newuser = new User({
        ...UserNew,
        password: hashPassword
      })

      return await newuser.save()
    },
    signInUser: async (_, { ExistUser }) => {
      const user = await User.findOne({ email: ExistUser.email })
      if (!user) {
        throw new Error('User Does not exist with this email Id')
      }

      // return 'kjkjhkjkhkh';

      const doMatch = await bcrypt.compare(ExistUser.password, user.password)
      if (!doMatch) {
        throw new Error('Email or Passowrd is Invalid')
      }
      const token = Jwt.sign({ userId: user._id }, JWT_SECRET)
      user.token = token
      return user
    },
    createQuote: async (_, { name }, { userId }) => {
      if (!userId) throw new Error('You must be loged In')

      const newquote = new Quote({
        name,
        by: userId
      })

      await newquote.save()
      return 'Quote Save succsesfully'
    }
  }
}

export default resolvers
