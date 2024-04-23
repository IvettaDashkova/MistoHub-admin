import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'companies',
  title: 'Companies',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Company ID',
      type: "number",
    }),
    defineField({
      name: 'name',
      title: 'Company name',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Company type',
      type: 'string',
    }),
    defineField({
      name: 'logoURL',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'link',
      title: "Link to the Company's Website",
      type: 'url',
    }),
    defineField({
      name: 'question',
      title: 'Question to the Company',
      type: 'string',
    }),
    defineField({
      name: 'answer',
      title: "Company's answer",
      type: 'text',
    }),
  ],
})
