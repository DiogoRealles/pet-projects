const baseURL = 'http://localhost:3000/api/';

export async function fetchMyPosts(){
  // await new Promise(resolve => setTimeout(resolve, 2000));
  
  const res = await fetch(`${baseURL}/my-posts`, {
    next: {
      revalidate: 60,
    }
  });
  const data = await res.json();

  return data;
}