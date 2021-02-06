// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mockGoogleJson from "./mockGoogJobs.json";

export default {
  //mocked always resolving Promise
  async googleMockQuery() {
    return new Promise(function (resolve, reject) {
      const response = { stausCode: 200, data: mockGoogleJson };
      resolve(response);
    });
  },
};
