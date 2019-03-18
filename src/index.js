// import makeHeaderTemplate from './header-component.js';
import loadCard from './list-component.js';
import { dataList } from '../data/sample-data.js';

const campsiteList = dataList.RECDATA;

loadCard(campsiteList);