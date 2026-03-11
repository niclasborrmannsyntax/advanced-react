import { compose } from "../utils/compose";
import withLoading from "./withLoading";
import withLogging from "./withLogging";

const withEnhancements = compose(withLogging, withLoading);

export default withEnhancements;
