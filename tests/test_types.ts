import nock from '../index.ts'

nock('https://example.test')
  .filteringRequestBody((body: string) => {
    return body.replace(/secret/, 'x')
  })
  .post('/thing')
  .reply(200)

nock('https://example.test')
  .filteringPath(/id=\d+/, 'id=1')
  .get('/thing')
  .reply(200)

nock('https://example.test')
  .filteringPath((path: string) => {
    return path.replace('/v1/', '/v2/')
  })
  .get('/thing')
  .reply(200)

nock('https://example.test')
  .filteringRequestBody(/foo/, 'bar')
  .post('/thing')
  .reply(200)

nock.cleanAll()
