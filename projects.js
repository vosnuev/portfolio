/* 프로젝트 내용 데이터
 * 카드 문구, 상세 설명, 성과 수치, 차트 행을 이 파일에서 편집합니다.
 * 화면 구조와 클릭 기능은 app.js에 두어 내용 수정과 동작 수정을 분리했습니다.
 */
window.PORTFOLIO_PROJECTS = [
  {
    id: 'cozy', phase: 'FINAL', cardTitle: '체형 기반\n패션 추천', cardCopy: '신체치수 추정과 공유 옷장을 사용자 흐름에 연결했습니다.', title: 'COZY', kicker: 'FINAL · AI FASHION SERVICE',
    summary: '신체치수 추정부터 공유 옷장과 추천까지, AI 기능을 실제 사용 흐름에 연결했습니다.',
    role: '신체치수 추정·API, 공유 옷장 도메인·모바일 연동. 기존 입력·사진 업로드 구조를 이어받아 구현했습니다.',
    tags: ['Python', 'Django', 'React Native', 'Qdrant'],
    metric: { value: '1.537 cm', label: '정의 교정·재학습 후 다리 길이 MAE' },
    problem: '모델의 숫자가 그럴듯해도 측정 기준이 다르면 추천에 쓸 수 없습니다. 사진 추론 실패와 비동기 업로드 중 공유 상태도 일관되게 처리해야 했습니다.',
    decisions: [
      { title: '모델보다 먼저 측정 정의를 확인', body: '기존 대체 랜드마크와 서비스가 요구한 길이 정의의 차이를 찾았습니다. 같은 4,485행·정답 기준으로 비교하고, 정확한 길이 정의에 맞춰 모델을 재학습했습니다.' },
      { title: '사진의 효과를 부위별로 평가', body: '143명 비교에서 사진 입력은 가슴·허리를 개선했지만 다른 5개 부위는 악화했습니다. 전체 평균만으로 사진 모델을 채택하지 않고, 부위별 오차와 운영 비용을 함께 검토했습니다.' },
      { title: '공유 상태를 기기에서 DB로 이동', body: '업로드가 끝나기 전에 선택한 공유방 정보가 유지되도록 DB 예약 구조로 옮겼습니다. 참여 요청은 select_for_update로 보호하고, 접근 가능한 공유 옷을 추천 검색 필터에 연결했습니다.' }
    ],
    result: '다리 길이 MAE 11.613 → 1.537cm. 추론 오류 코드·사유와 지연 상태 만료 처리를 추가했고, 공유방·멤버·아이템 API를 모바일 흐름까지 연결했습니다.',
    limitations: '길이 비교는 정의 교정과 재학습을 포함합니다. 사진 입력의 효과는 부위별로 다르며, 추천 만족도까지 검증한 결과는 아닙니다.',
    next: '직접 입력한 치수를 보존하는 우선순위를 정하고, 부위별 하이브리드 추정을 별도 평가하겠습니다. 추천 품질은 사용자 평가와 ranking 지표로 확인하겠습니다.',
    architecture: ['성별·키·몸무게 / 사진', 'Django 추론 API', 'Tabular 모델 / VLM', '결과·실패 상태 저장', '모바일 프로필·추천'],
    chart: { title: '다리 길이 오차 비교', unit: 'cm', rows: [{ label: '기존 대체 정의', value: 11.613 }, { label: '정의 교정·재학습', value: 1.537 }], note: '낮을수록 좋음 · 동일 4,485행·정확 정의 정답 기준. 기존 181명 모델과 exact-v2 교차검증 결과 비교.' },
    evidence: [
      { label: '프로젝트 저장소', href: 'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN28-FINAL-1Team' },
      { label: '길이 비교 원본', href: 'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN28-FINAL-1Team/blob/main/ml/body_measurement/data/hist/comparison_exact_lengths_v2.json' },
      { label: '추론 구현', href: 'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN28-FINAL-1Team/blob/main/ml/body_measurement/src/inference.py' }
    ]
  },
  {
    id: 'agent', phase: '4TH', cardTitle: '복지·법령\n상담 Agent', cardCopy: '답변의 실패 원인을 찾고 외부 도구를 검증했습니다.', title: '옆집손주', kicker: '04 · AGENT & EVALUATION',
    summary: '고령층 복지·법령 상담 Agent의 실행 흐름과 외부 도구, 평가 체계를 연결했습니다.',
    role: 'Agent backend, file-search RAG 연결, SSE 응답, 외부 MCP와 평가. GraphRAG는 팀원 구현 영역입니다.',
    tags: ['LangGraph', 'FastAPI', 'MCP', 'LangSmith'],
    metric: { value: '360 문항', label: '법령·정책·시설 정보를 다루는 평가 질문' },
    problem: '근거 없이 단정해도 답변은 자연스러웠습니다. 몇 개의 응답을 읽는 방식으로는 실패 원인과 모델 선택의 기준을 설명하기 어려웠습니다.',
    decisions: [
      { title: '정답률과 운영 지표를 나눠 비교', body: '모델 3종×provider 12개 조합을 비교하고, judge는 4개 후보로 좁혔습니다. 정확도뿐 아니라 지연·비용·실패를 함께 확인했습니다. no-tool 비교 결과를 실제 서비스 개선율로 해석하지 않았습니다.' },
      { title: '오답을 다음 실험의 입력으로 전환', body: '모델·문항 쌍 기준 오답 405건을 8유형으로 분류했습니다. 구체 데이터 누락, 근거 매핑 오류, 근거 없는 단정이 66.4%를 차지해 검색·근거 연결을 우선 점검했습니다.' },
      { title: '도구의 입출력 계약을 별도로 검증', body: 'Naver·Firecrawl·TMAP을 MCP 도구로 분리했습니다. fake API와 live API 블랙박스 테스트로 요청·응답·오류 처리를 확인하고, SSE로 Agent 응답 흐름을 연결했습니다.' }
    ],
    result: '평가 질문 360개, 오답 405건·8유형의 분석 자료를 만들었습니다. MCP 계약 테스트는 한 실행에서 fake 16건과 live 12건, 총 28/28건을 통과했습니다.',
    limitations: '아래 정답률은 도구를 연결하지 않은 후보 비교입니다. 도구 연결 후 재평가는 2문항으로, 서비스 전체 품질을 판단하기에는 부족합니다.',
    next: '오답 111건으로 만든 재평가 데이터셋을 모두 재실행하고, 출처 포함률·도구 호출 성공률·지연을 함께 추적하겠습니다.',
    architecture: ['사용자 질문', 'FastAPI · LangGraph', '검색 RAG / 외부 MCP', 'LLM 응답 · SSE', 'Trace · 오답 분석'],
    chart: { title: '도구 미연결 모델 정답률', unit: '%', rows: [{ label: 'DeepSeek v4-pro', value: 76.11 }, { label: 'DeepSeek v4-flash', value: 69.17 }, { label: 'GPT-OSS', value: 63.33 }], note: 'LLM judge · 각 360문항 · 독립 후보 비교. 서비스의 전후 개선 수치가 아닙니다. 200문항만 완료한 Qwen은 이 차트에서 제외했습니다.' },
    evidence: [
      { label: '프로젝트 저장소', href: 'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN28-4th-1Team' },
      { label: '벤치마크 보고서', href: 'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN28-4th-1Team/blob/main/presentation/test-data/no-tool-benchmark/no_tool_benchmark_report.md' },
      { label: 'Judge 평가 원본', href: 'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN28-4th-1Team/blob/main/presentation/test-data/llm-as-a-judge/artifacts/tools-no/llm_judge_model_summary.csv' }
    ]
  },
  {
    id: 'churn', phase: '2ND', cardTitle: '고객 이탈\n예측 분석', cardCopy: '놓치는 고객과 오탐 비용을 함께 비교했습니다.', title: 'CEO', kicker: '02 · CHURN PREDICTION',
    summary: '고객 이탈 예측에서 놓치는 고객과 오탐 비용을 비교하고, 판단 기준을 조정했습니다.',
    role: '국내 앱 리뷰 수집, 개인 EDA·전처리·모델링·임계값 실험. 최종 서비스에는 팀원 pipeline이 연결됐습니다.',
    tags: ['XGBoost', 'LightGBM', 'Optuna', 'Pandas'],
    metric: { value: '92.59%', label: '개인 실험 · 이탈 고객 재현율 175/189' },
    problem: '이탈 고객 비율이 낮아 전체 정확도만 보면 놓치는 고객이 가려졌습니다. 공개 정형 데이터에 국내 사용자의 불편이 충분히 담겨 있지 않은 점도 문제였습니다.',
    decisions: [
      { title: '리뷰와 학습 데이터를 목적에 맞게 구분', body: '국내 앱 리뷰 388,918건을 수집해 이탈 신호를 살폈습니다. 모델 학습에는 항목이 정리된 5,630행×20항목의 공개 데이터를 사용했습니다.' },
      { title: '기본 임계값 대신 오류 비용으로 판단', body: '정밀도–재현율 곡선과 임계값 민감도를 비교했습니다. 이탈 고객을 놓치는 비용을 우선 고려해 개인 XGBoost 실험의 임계값을 0.32로 조정했습니다.' },
      { title: '성공 수치 옆에 오탐도 공개', body: '이탈 189명 중 175명을 탐지했고 14명을 놓쳤습니다. 잔류 고객 45명에 대한 오탐도 함께 기록해, 재현율을 높이는 데 따른 비용을 설명했습니다.' }
    ],
    result: '앱 리뷰 388,918건 수집. 개인 평가 1,126명에서 Recall 92.59%, Precision 79.55%, ROC-AUC 0.9746을 기록했습니다.',
    limitations: '개인 분석 실험 수치입니다. 중복 행, 분할 전 결측치 대치, test가 모델 선택에 관여한 절차 때문에 일반화 성능은 별도 검증이 필요합니다.',
    next: '중복 제거와 데이터 분할을 먼저 수행하고 전처리를 학습 구간 안에서 맞추겠습니다. 모델·임계값 선택 이후 독립 평가셋으로 성능을 다시 확인하겠습니다.',
    architecture: ['공개 정형 데이터', '개인 EDA · 전처리', 'XGBoost · Optuna', '임계값 0.32', '혼동행렬 · 비용 비교'],
    chart: { title: '이탈 고객 189명에 대한 결과', unit: '명', rows: [{ label: '탐지한 이탈 고객', value: 175 }, { label: '놓친 이탈 고객', value: 14 }], note: '개인 실험 · 평가 1,126명 · 임계값 0.32. 잔류 고객 중 오탐 45명, 정상 판정 892명.' },
    evidence: [
      { label: '프로젝트 저장소', href: 'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN28-2nd-4Team' },
      { label: '개인 모델링 노트북', href: 'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN28-2nd-4Team/blob/master/back_research/%EC%A0%84%ED%95%98%EC%98%81/notebooks/modeling.ipynb' },
      { label: '개인 EDA 노트북', href: 'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN28-2nd-4Team/blob/master/back_research/%EC%A0%84%ED%95%98%EC%98%81/notebooks/EDA.ipynb' }
    ]
  },
  {
    id: 'parking', phase: '1ST', cardTitle: '주차장 검색·\n수급 분석', cardCopy: '주소를 대조해 같은 이름의 다른 장소를 구분했습니다.', title: '주차장 검색·수급 분석', kicker: '01 · DATA COLLECTION',
    summary: '동명이인 주차장에 다른 리뷰가 붙는 문제를 주소 대조로 해결했습니다.',
    role: '네이버 크롤러, 주소 정규화·대조, 수집 데이터 모델·SQL과 수집 실패 처리.',
    tags: ['Python', 'Crawling', 'SQL', 'Data Quality'],
    metric: { value: '34 개', label: '공공데이터 항목을 검토해 기능 범위 결정' },
    problem: '처음 기획한 실시간 빈자리 안내에 필요한 점유 데이터가 없었습니다. 이름으로 수집한 리뷰는 같은 이름의 다른 주차장과 연결되기도 했습니다.',
    decisions: [
      { title: '데이터가 지원하는 범위로 기획 조정', body: '공공 표준데이터 34개 항목에 실시간 점유 정보가 없음을 확인했습니다. 빈자리 예측 범위를 줄이고 운영 종료까지 남은 시간을 계산하는 방향으로 조정했습니다.' },
      { title: '이름 검색 뒤 주소로 동일 장소 확인', body: '광역시 표기를 통일하고 도로명·지번의 문자열과 번지수를 대조했습니다. 주소가 맞는 대상만 수집하고, 끝내 매칭되지 않는 대상은 기록 후 건너뛰었습니다.' },
      { title: '수급 수치에 실제 이용 경험을 보완', body: '주차 면수만으로 설명하기 어려운 현장 불편을 리뷰로 보완하고자 했습니다. 수집 결과의 DB 모델과 SQL을 정리해 검색 데이터와 연결했습니다.' }
    ],
    result: '주소 정규화와 번지수 대조를 포함한 수집 로직, 저장 모델·SQL을 구현했습니다. 데이터의 제약을 확인한 뒤 제공 가능한 기능으로 범위를 정리했습니다.',
    limitations: '실시간 빈자리 정보는 제공하지 못합니다. 주소 매칭의 정량 정확도와 다양한 주소 예외에 대한 평가는 추가로 필요합니다.',
    next: '정식 주소 식별자와 좌표를 결합하고, 오매칭 사례를 모은 평가셋으로 정밀도·누락률을 측정하겠습니다.',
    architecture: ['공공 주차장 데이터', '네이버 장소 검색', '주소 정규화·번지 대조', '일치 리뷰 수집 · DB', '검색·지역 수급 분석'],
    evidence: [
      { label: '프로젝트 저장소', href: 'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN28-1st-2team' },
      { label: '데이터 수집 코드', href: 'https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN28-1st-2team/tree/main/src/collect' }
    ]
  }
];
