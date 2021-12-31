import moment from "moment";
const format = function formatUnix(value) {
  if (value) {
    return moment(value).format("DD/MM/YYYY");
  }
};
export default format;