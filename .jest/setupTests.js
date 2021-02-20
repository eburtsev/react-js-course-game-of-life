// setup file
import { configure } from "enzyme";
import ReactSeventeenAdapter from "@wojtekmaj/enzyme-adapter-react-17/build";

configure({ adapter: new ReactSeventeenAdapter() });
