// firebaseAPI.js
import {
  setArticlesData,
  setFaqsData,
  setFeaturesData,
  setImagesData,
  setSiteData,
} from "@/redux/actions";
import { store } from "@/redux/app/store";
import { getStaticData } from "./firebaseutils";
import moment from "moment";

// Fetch FAQs from Firebase and set Redux state
const fetchFAQs = async () => {
  // Fetch FAQs from a Firebase database
  try {
    getStaticData("FAQ").then((allfaqs) => {
      store.dispatch(setFaqsData(allfaqs));
    });
  } catch (error) {
    console.error("Error fetching FAQs from Firebase:", error);
  }
};

// Fetch articles from Firebase and set Redux state
const fetchArticles = async () => {
  // Fetch articles from a Firebase database
  try {
    getStaticData("Articles").then((allarticles) => {
      for (let i = 0; i < allarticles.length; i++) {
        allarticles[i].article_add_date = moment(
          allarticles[i].article_add_date.toDate()
        ).format("DD, MMM, YYYY");
      }
      store.dispatch(setArticlesData(allarticles));
    });
  } catch (error) {
    console.error("Error fetching articles from Firebase:", error);
  }
};

// Fetch Site Static Data from Firebase and set Redux state
const fetchSitedata = async () => {
  // Fetch Site Static Data from a Firebase database
  try {
    getStaticData("AppInfo").then((appinfo) => {
      store.dispatch(setSiteData(appinfo[0]));
    });
  } catch (error) {
    console.error("Error fetching articles from Firebase:", error);
  }
};

// Fetch Site Static Data from Firebase and set Redux state
const fetchImagesdata = async () => {
  // Fetch Site Static Data from a Firebase database
  try {
    getStaticData("ImageGallery").then((imageDoc) => {
      store.dispatch(setImagesData(imageDoc[0].images));
    });
  } catch (error) {
    console.error("Error fetching articles from Firebase:", error);
  }
};

// Fetch Site Static Data from Firebase and set Redux state
const fetchFeaturesdata = async () => {
  // Fetch Site Static Data from a Firebase database
  try {
    getStaticData("Features").then((allfeatures) => {
      store.dispatch(setFeaturesData(allfeatures));
    });
  } catch (error) {
    console.error("Error fetching articles from Firebase:", error);
  }
};

// Fetch data from Firebase
const fetchDataFromFirebase = async () => {
  await fetchSitedata();
  await fetchFAQs();
  await fetchArticles();
  await fetchImagesdata();
  await fetchFeaturesdata();
};

export { fetchDataFromFirebase };
