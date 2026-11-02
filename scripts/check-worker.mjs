import assert from 'node:assert/strict';
import worker from '../worker/index.js';
const env={ASSETS:{fetch:async request=>new Response(new URL(request.url).pathname)}};
for(const origin of ['http://portofhonfleur.com','https://portofhonfleur.com','http://www.portofhonfleur.com']){
 const response=await worker.fetch(new Request(origin+'/fr/parking-honfleur?x=1'),env);
 assert.equal(response.status,301);assert.equal(response.headers.get('Location'),'https://www.portofhonfleur.com/fr/parking-honfleur?x=1');
}
for(const path of ['/fr/parking-honfleur/','/fr/parking-honfleur/index.html']){
 const response=await worker.fetch(new Request('https://www.portofhonfleur.com'+path+'?x=1'),env);
 assert.equal(response.status,301);assert.equal(response.headers.get('Location'),'https://www.portofhonfleur.com/fr/parking-honfleur?x=1');
}
for(const method of ['GET','HEAD']){
 const response=await worker.fetch(new Request('https://www.portofhonfleur.com/missing-route',{method}),env);
 assert.equal(response.status,404);assert.equal(response.headers.get('X-Robots-Tag'),'noindex');
 if(method==='HEAD') assert.equal(await response.text(),'');
}
assert.equal(await (await worker.fetch(new Request('https://www.portofhonfleur.com/en/blog/post1'),env)).text(),'/index.html');
assert.equal(await (await worker.fetch(new Request('https://www.portofhonfleur.com/en/honfleur-marina'),env)).text(),'/en/honfleur-marina/index.html');
console.log('Worker routing and canonical redirect checks passed.');
