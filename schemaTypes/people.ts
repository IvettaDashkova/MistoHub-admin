import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'people',
  title: 'People',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Person ID',
      type: "number",
    }),
    defineField({
      name: 'firstName',
      title: 'First name',
      type: 'string',
    }),
    defineField({
      name: 'secondName',
      title: 'Second name',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'imageURL',
      title: 'Person Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'facebook',
      title: "Link to the Person's Facebook account",
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: "Link to the Person's Instagram account",
      type: 'url',
    }),
    defineField({
      name: 'otherLink',
      title: "Link to the Person's Website",
      type: 'url',
    }),
    defineField({
      name: 'question',
      title: 'Question to the person',
      type: 'string',
    }),
    defineField({
      name: 'answer',
      title: "Person's answer",
      type: 'text',
    }),
  ],
})
