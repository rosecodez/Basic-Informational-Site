(()=>{"use strict";const e=require("http"),t=require("fs");e.createServer(((e,r)=>{t.readFile("demofile1.html",((e,t)=>(r.writeHead(200,{"Content-Type":"text/html"}),r.write(t),r.end())))})).listen(8080)})();