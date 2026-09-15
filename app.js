/* 화면 연결 기능
 * projects.js의 데이터를 카드와 상세 화면에 연결하고, hash 클릭 이동을 관리합니다.
 */
(() => {
 'use strict';
 const projects=window.PORTFOLIO_PROJECTS||[];
 const grid=document.querySelector('#project-grid');
 const home=document.querySelector('#home-view');
 const detail=document.querySelector('#project-view');
 let savedScroll=0,previousProject=false,lastProject=null;
 const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n};
 const append=(parent,...nodes)=>{nodes.forEach(n=>parent.append(n));return parent};
 function art(project){
  const box=el('div','phone-art');box.setAttribute('aria-hidden','true');
  if(project.id==='agent'){const img=el('img');img.src='assets/rody-home.jpg';img.alt='';box.append(img)}
  if(project.id==='cozy'){const word=el('div','mini-cozy','cozy.');word.append(el('span','','BODY · WARDROBE · STYLE'));box.append(word)}
  if(project.id==='churn'){const bars=el('div','mini-bars');append(bars,el('i'),el('i'),el('i'));box.append(bars)}
  if(project.id==='parking')box.append(el('div','mini-map','P ↗'));
  return box;
 }
 // 카드 내용은 projects.js에서 편집합니다. 이 파일에는 표현 방식만 남깁니다.
 projects.forEach((p,i)=>{
  const card=el('a','project-card');card.href='#project/'+p.id;card.setAttribute('aria-label',p.title+' 프로젝트 자세히 보기');
  const number=el('div','project-number');append(number,el('span','',`0${i+1} / ${p.phase}`),el('span','',p.id==='parking'?'PARKING':p.title));
  const phone=el('div','phone');phone.append(el('div','phone-island'));
  p.tags.slice(0,2).forEach(t=>phone.append(el('span','tag',t)));
  const title=el('h3','',p.cardTitle);title.style.whiteSpace='pre-line';append(phone,title,el('p','',p.cardCopy),art(p));
  const metric=el('div','phone-metric');append(metric,el('strong','',p.metric.value),el('small','',p.metric.label));phone.append(metric);
  const shell=el('div','phone-shell');shell.append(phone);
  const cardLink=el('div','card-link');append(cardLink,el('span','','구현 과정과 결과'),el('span','','↗'));
  append(card,number,shell,el('p','card-role',p.role),cardLink);grid.append(card);
 });
 function block(title){const section=el('section','detail-block');section.append(el('h2','',title));detail.append(section);return section}
 function chart(data){
  const shell=el('div','chart-shell');const content=el('div','chart');content.append(el('h3','',data.title));
  const max=data.unit==='%'?100:Math.max(...data.rows.map(r=>r.value));
  data.rows.forEach(row=>{const line=el('div','chart-row');const top=el('div','chart-row-top');append(top,el('span','',row.label),el('strong','',`${row.value.toLocaleString('ko-KR')} ${data.unit}`));const track=el('div','chart-track');const bar=el('div','chart-bar');bar.style.width=`${row.value/max*100}%`;bar.setAttribute('aria-hidden','true');track.append(bar);append(line,top,track);content.append(line)});
  content.append(el('p','chart-note',data.note));
  const table=el('table','data-table');const caption=el('caption','fineprint','비교 수치');table.append(caption);const thead=el('thead');const tr=el('tr');append(tr,el('th','','비교 항목'),el('th','',`측정값 (${data.unit})`));thead.append(tr);const tbody=el('tbody');data.rows.forEach(r=>{const row=el('tr');append(row,el('td','',r.label),el('td','',r.value.toLocaleString('ko-KR')));tbody.append(row)});append(table,thead,tbody);content.append(table);shell.append(content);return shell;
 }
 function render(p){
  detail.replaceChildren();
  const back=el('a','back-link','← 프로젝트 목록으로');back.href='#work';detail.append(back);
  const header=el('header','detail-header');header.append(el('span','eyebrow',p.kicker));const title=el('h1','',p.title);title.id='detail-title';title.tabIndex=-1;append(header,title,el('p','summary',p.summary));const tags=el('div','detail-tags');p.tags.forEach(t=>tags.append(el('span','tag',t)));header.append(tags);const role=el('div','detail-role');append(role,el('span','detail-label','MY CONTRIBUTION'),el('p','',p.role));header.append(role);detail.append(header);
  if(p.id==='agent'){const figure=el('figure','detail-shot');const img=el('img');img.src='assets/rody-consultation.jpg';img.alt='로디 상담 UI: 대화와 신청 절차를 함께 보여주는 실제 서비스 화면';append(figure,img,el('figcaption','fineprint','프로젝트 실제 화면 · 로디 UI'));detail.append(figure)}
  block('01 / 해결할 문제').append(el('p','',p.problem));
  const architecture=block('02 / 구현 흐름');const flow=el('div','architecture');p.architecture.forEach((name,i)=>{if(i)flow.append(el('span','architecture-arrow','→'));flow.append(el('div','architecture-node',name))});architecture.append(flow);architecture.append(el('p','fineprint','담당 기능 중심으로 간소화한 흐름입니다. 전체 서비스 아키텍처와는 범위를 구분합니다.'));
  const decisions=block('03 / 선택의 이유');const list=el('div','detail-decisions');p.decisions.forEach((d,i)=>{const article=el('article','decision');append(article,el('span','decision-index',`DECISION 0${i+1}`),el('h3','',d.title),el('p','',d.body));list.append(article)});decisions.append(list);
  const results=block('04 / 결과와 검증');if(p.chart)results.append(chart(p.chart));results.append(el('p','',p.result));
  if(p.id==='agent'){
   const compare=el('table','data-table');compare.append(el('caption','chart-note','정답률과 응답 대기시간을 함께 비교'));
   const head=el('thead');const row=el('tr');['후보 모델','정답률','평균 응답'].forEach(t=>row.append(el('th','',t)));head.append(row);compare.append(head);
   const body=el('tbody');[['v4-pro','76.11%','34.204초'],['v4-flash','69.17%','12.385초'],['GPT-OSS','63.33%','1.411초']].forEach(values=>{const r=el('tr');values.forEach(v=>r.append(el('td','',v)));body.append(r)});compare.append(body);results.append(compare,el('p','fineprint','도구 미연결 후보 비교 · 평균 지연은 성공 응답 기준. v4-pro 359건, 나머지 각 360건. 정확도 하나만으로 운영 모델을 결정하지 않았습니다.'));
  }
  if(p.id==='churn'){const highlight=el('div','decision');append(highlight,el('span','decision-index','DATA COLLECTION'),el('h3','','388,918건'),el('p','','국내 앱 리뷰 수집 · 국내 이탈 신호 분석에 활용'));results.append(highlight)}
  block('05 / 한계와 다음 개선').append(el('p','',p.limitations),el('p','',p.next));
  const evidence=block('코드와 평가 근거');const links=el('div','evidence-links');p.evidence.forEach(e=>{const a=el('a','',e.label+' ↗');a.href=e.href;a.target='_blank';a.rel='noopener';links.append(a)});evidence.append(links);
  const next=projects[(projects.indexOf(p)+1)%projects.length];const nextLink=el('a','next-project');nextLink.href='#project/'+next.id;append(nextLink,el('span','',`다음 프로젝트 · ${next.title}`),el('span','','↗'));detail.append(nextLink);
 }
 function route(){
  const hash=location.hash;const match=hash.match(/^#project\/([^/]+)$/);const p=match&&projects.find(p=>p.id===match[1]);
  if(p){if(!previousProject)savedScroll=window.scrollY;render(p);home.hidden=true;detail.hidden=false;previousProject=true;lastProject=p.id;document.title=`${p.title} — 전하영 포트폴리오`;window.scrollTo({top:0,behavior:'instant'});document.querySelector('#detail-title').focus({preventScroll:true})}
  else{home.hidden=false;detail.hidden=true;document.title='전하영 — AI 서비스 개발자';if(match)history.replaceState(null,'','#work');const target=document.getElementById(match?'work':hash.slice(1));if(previousProject&&hash==='#work')window.scrollTo({top:savedScroll,behavior:'instant'});else if(target)target.scrollIntoView({behavior:'instant'});if(previousProject&&hash==='#work'&&lastProject)document.querySelector(`.project-card[href="#project/${lastProject}"]`)?.focus({preventScroll:true});previousProject=false;}
 }
 window.addEventListener('hashchange',route);route();
 if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('reveal');observer.unobserve(entry.target)}})},{threshold:.06});document.querySelectorAll('.section-heading,.project-card,.about-grid,.skill-row').forEach(e=>observer.observe(e))}
})();
