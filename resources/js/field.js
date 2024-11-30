import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-tincymicy-field', IndexField)
  app.component('detail-tincymicy-field', DetailField)
  app.component('form-tincymicy-field', FormField)
})
