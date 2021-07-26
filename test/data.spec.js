import { getFilm, mapDirectors, filterDirectors, searchYears, sortAZ, sortZA } from '../src/data.js';

describe('getFilm', () => {
  it('`getFilm` is a function', () => {
    expect(typeof getFilm).toBe('function');
  });
  it('Muestra toda la información', () => {
    const example = {"films":[
      {director:"Hayao Miyazaki", title:"Castle in the Sky"}, 
      {director: "Isao Takahata" , title: "Grave of the Fireflies"},
      {director: "Hayao Miyazaki" , title: "My Neighbor Totoro"}
    ]}
      expect(getFilm(example)).toEqual([
        {director:"Hayao Miyazaki", title:"Castle in the Sky"}, 
        {director: "Isao Takahata" , title: "Grave of the Fireflies"},
        {director: "Hayao Miyazaki" , title: "My Neighbor Totoro"}
      ])
    })
});

describe('mapDirectors' , () => {
  it('`mapDirectors` is a function', () => {
    expect(typeof mapDirectors).toBe('function');
  })
})


describe('filterDirectors' , () => {
  it('`filterDirectors` is a function', () => {
    expect(typeof filterDirectors).toBe('function');
  })
  it ('Movies by `Hayao Miyazaki`', () => {
    const example = {"films":[
      {director:"Hayao Miyazaki", title:"Castle in the Sky"}, 
      {director: "Isao Takahata" , title: "Grave of the Fireflies"}
    ]}
      expect(filterDirectors(example, "Hayao Miyazaki")).toEqual([{director:"Hayao Miyazaki", title:"Castle in the Sky"}])
  })
})

describe('searchYears' , () => {
  it ('`searchYears` is a function', () => {
    expect(typeof searchYears).toBe('function');
  })
  it ('Movies from 1986', () => {
    const example =  [{release_date: "1986", title: "Castle in the Sky"}, 
    {release_date: "1988", title: "My Neighbor Totoro",}]
    expect(searchYears(example , "1986")).toEqual([{release_date: "1986", title: "Castle in the Sky"}])
  })
})

describe('sortAZ', () => {
  it('`sortAZ` is a function', () => {
    expect(typeof sortAZ).toBe('function');
  });
  it('Ordena de la A a la Z', () => {
    const example = [
      {title:"Castle in the Sky"}, 
      {title: "My Neighbor Totoro"},
      {title: "Grave of the Fireflies"}
    ]
      expect(sortAZ(example)).toEqual([
        {title:"Castle in the Sky"}, 
        {title: "Grave of the Fireflies"},
        {title: "My Neighbor Totoro"}
      ])
    })
});

describe('sortZA', () => {
  it('`sortZA` is a function', () => {
    expect(typeof sortZA).toBe('function');
  });
  it('Ordena de la Z a la A', () => {
    const example = [
      {title:"Castle in the Sky"}, 
      {title: "My Neighbor Totoro"},
      {title: "Grave of the Fireflies"}
    ]
      expect(sortZA(example)).toEqual([
        {title: "My Neighbor Totoro"},
        {title: "Grave of the Fireflies"},
        {title:"Castle in the Sky"}
      ])
    })
});