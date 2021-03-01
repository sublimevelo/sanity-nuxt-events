import S from '@sanity/desk-tool/structure-builder'
import { MdPerson } from 'react-icons/md'
import { MdEvent } from 'react-icons/md'
import { MdGavel } from 'react-icons/md'
import { MdInfoOutline as MdInfo } from 'react-icons/md'

const hiddenDocTypes = listItem =>
  // !['program', 'conferenceSession', 'person', , 'codeOfConduct'].includes(listItem.getId())
  ![
    'conference',
    'conferenceSession',
    'series',
    'seriesSession',
    'person',
    'codeOfConduct'
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('People')
        .icon(MdPerson)
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),
      // S.listItem()
      //   .title('Conference')
      //   .icon(MdInfo)
      //   .child(S.documentTypeList('conference').title('Conference')),
      // S.listItem()
      //   .title('Sessions')
      //   .schemaType('conferenceSession')
      //   .child(S.documentTypeList('conferenceSession').title('Sessions')),
      S.listItem()
        .title('Series')
        .icon(MdInfo)
        .child(S.documentTypeList('series').title('Series')),
      S.listItem()
        .title('Series Session')
        .icon(MdEvent)
        .child(S.documentTypeList('seriesSession').title('Series Sessions')),
      //   S.editor()
      //     .id('conference')
      //     .schemaType('conference')
      //     .documentId('conference')
      // ),
      // S.listItem()
      //   .title('Code of Conduct')
      //   .icon(MdGavel)
      //   .child(
      //     S.editor()
      //       .id('codeOfConduct')
      //       .schemaType('codeOfConduct')
      //       .documentId('codeOfConduct')
      //   ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
