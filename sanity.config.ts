import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from '../frontend/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'alamventures',

  projectId: 'inu86bxn',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
