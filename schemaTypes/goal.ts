import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'goal',
  title: 'Intended goal(USD)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of our goal',
      type: 'string',
    }),
    defineField({
      name: 'goal',
      title: 'Goal(USD)',
      type: 'number',
      validation: Rule => Rule.positive().precision(2)
    }),
    defineField({
      name: 'raised',
      title: 'Raised(USD)',
      type: 'number',
      validation: Rule => Rule.positive().precision(2)
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
