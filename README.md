# lumen-frontend-techtonic


![Logo](https://i.ibb.co/vLRR8cP/Lumen-logo.png)

![Logo](https://i.ibb.co/SdN7rvV/TECHTONIC-logo.png)



# Lumen App by TECHTONIC

Lumen is A learning resource library that provides a single point of searchable content.

It's value resides in the fact that it is curated by the cohort – meaning that not only is the content current, but it is relevant to the technologies and standards that are being taught and used by the bootcampers at that time.




## API Reference

#### Get all resources

```http
  GET /api/v2/resources
```

#### Add a resources using POST

```http
  POST /api/v2/resources
```

| Body in JSON RAW is sent via the form in the Popup component as:

{
    "title": <string>
    "url": <string>
    "language": <string>
    "category": <string>
    "description": <string>
}   

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Oxford Blue |  #002147|
| Riviera Paradise |  #03989E|
| Ice Cold Stare | #C3DEFC |
| Delta Pale Yellow | #FFF9AE |
| Scotch Mist | #FFFDDD |


## Authors

- [@sea-breezy](https://github.com/sea-breezy)
- [@november-golf](https://github.com/november-golf)
- [@DannyBains2](https://github.com/DannyBains2)
- [@ikram-zak](https://github.com/Ikram-Zak)


## Documentation

[ Lumen APP & Components](/lumen_app/docs/index.html)
// Open repo on local machine to access documentation via Localhost.

[ React Beta docs](https://beta.reactjs.org/)




## Installation

Clone repository and install dependencies


```bash
  git clone https://github.com/SchoolOfCode/lumen-frontend-techtonic.git
  cd lumen_app
  npm i
```
    
