describe('CRUD-Operation-payload', () => {
  it('get', () => {
    cy.request({
        method : 'GET',
        url : 'http://localhost:3001/api/resources',
  }).then(function(response){
    expect(response.body).have.property('payload');
  })
  })
})


describe('CRUD-Operation-success', () => {
  it('get', () => {
    cy.request({
        method : 'GET',
        url : 'http://localhost:3001/api/resources',
  }).then(function(response){
    expect(response.body).have.property('success');
  })
  })
})


describe('CRUD-Operation-post', () => {
  it('get', () => {
    cy.request({
        method : 'GET',
        url : 'http://localhost:3001/api/resources',
  }).then(function(response){
    expect(response.body.payload[0]).have.property('title');
  })
  })
})