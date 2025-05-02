const getBaseUrl = () =>
  typeof window === "undefined"
    ? process.env.BASE_URL || "http://localhost:3000"
    : "";

export const getAllPosts = async () => {
  try {
    const response = await fetch(`${getBaseUrl()}/api/posts`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const getPostsBySearch = async (search: string) => {
  try {
    const response = await fetch(`${getBaseUrl()}/api/posts?q=${search}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts by search:", error);
  }
};
