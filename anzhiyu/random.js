var posts=["2025/06/02/这是第二篇新的博文/","2025/06/02/My-New-Post/","2025/06/02/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };