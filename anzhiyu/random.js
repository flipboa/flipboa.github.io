var posts=["20250602/这是第二篇新的博文/","20250602/My-New-Post/","20250602/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };