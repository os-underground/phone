// node generate_kb_from_repo.js scan_output/files_list.txt
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
if(process.argv.length<3){ console.error('Usage: node generate_kb_from_repo.js <files_list.txt>'); process.exit(1); }
const files = fs.readFileSync(process.argv[2],'utf8').split(/\r?\n/).filter(Boolean);
const docs = [];
for(const f of files){
  try{
    const ext = path.extname(f).toLowerCase();
    const raw = fs.readFileSync(f,'utf8');
    let text = raw;
    if(ext === '.html' || ext === '.htm'){ const $ = cheerio.load(raw); text = $('body').text(); }
    text = text.replace(/\s+/g,' ').trim();
    if(text.length>30) docs.push({ source: f, excerpt: text.slice(0,2000), full: text });
  }catch(e){ console.warn('error', f, e.message); }
}
fs.writeFileSync('scan_output/kb_raw.json', JSON.stringify(docs,null,2));
fs.writeFileSync('scan_output/kb_raw.txt', docs.map(d=>d.excerpt).join('\n'));
console.log('KB generada:', docs.length);