// const BASE_URL = process.env.SOLR_BASE;
const BASE_URL = "http://localhost:8983/solr/core_1";
export default {
  async querySearchData(keywords) {
    //TODO enamble cors on sol server by replacing web.xml file with one i have on desktop
    //NOTE: after i replaced  web.xml i still had cors errors so i added chrome extension to ignore cors

    let keywordQuery;
    if (keywords.length > 0) keywordQuery = keywords.join(",");
    else keywordQuery = "*";
    let response = await fetch(
      //EXMPLE 1 this example fetches all documents that have "software" in jobDescriiption
      //   `${BASE_URL}/select?fl=DescriptionMarkup,JobType,JobFunction,Source,Industry,score&q=DescriptionMarkup:software`,
      //EXAMPLE 2 this example gets all documents that have "test or testing" in description and returns the results by score
      //   `${BASE_URL}/select?fl=DescriptionMarkup,score&q=DescriptionMarkup:test,testing`,
      `${BASE_URL}/select?fl=DescriptionMarkup,score&q=DescriptionMarkup:${keywordQuery}`,
      {
        headers: { Origin: location.origin },
      }
    );
    const data = await response.json();

    return data.response.docs;
  },
  async querySearchData2(query) {
    return null;
  },
  async querySearchData3(query) {
    return null;
  },
};
