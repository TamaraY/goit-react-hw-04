import axios from "axios";

export const fetchArticles = async (page = 0, query) => {
  const { data } = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: "_mrFDVAvAE8ojYscnS83cqv1c0rdRqbbLcRav-AJnS4",
      query: query,
      page: page,
      per_page: 6,
    },
  });
  return data.results;
};
