//const UserTypeModel = require("../../models/admin/userTypeModel");
const UserTypeModel = require("../../models/admin/userTypeModel");

const DashboardController = {
  getDashboardCards: async (req, res) => {
    try {
      const userTypes = await UserTypeModel.getAllUserTypes();

      // Map DB data to frontend-friendly response
      const response = userTypes.map(type => ({
        id: type.type_id,
        header: type.type_name,
        description: type.description,
        // image mapping can be handled in frontend
      }));

      res.status(200).json({
        success: true,
        data: response
      });
    } catch (error) {
      console.error("Dashboard Error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch dashboard data"
      });
    }
  }
};

module.exports = DashboardController;
