class HomeService {
  index() {
      return {
          status: 200,
          message: "Api para aplicación HIC"
      };
  }
}

module.exports = HomeService;