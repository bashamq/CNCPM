
const API_URL="https://script.google.com/macros/s/AKfycby2-9b3Rb1UUVidKqN45Ykdtexcx3AHZphq3lRdR1f5UrW7kSV6DLj8QLncu21GH3X2/exec";
async function apiGet(action,params={}){
 const u=new URL(API_URL); u.searchParams.set("action",action);
 Object.entries(params).forEach(([k,v])=>{if(v!==""&&v!=null)u.searchParams.set(k,v)});
 const r=await fetch(u.toString()); return await r.json();
}
async function apiPost(action,data={}){
 const r=await fetch(API_URL,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({action,...data})});
 return await r.json();
}
function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
function msg(text,ok=true){const e=document.getElementById("msg");if(!e)return;e.className="msg "+(ok?"ok":"err");e.textContent=text;e.style.display="block";setTimeout(()=>e.style.display="none",4000)}
