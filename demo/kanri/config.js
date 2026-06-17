/* =====================================================================
   管理画面 設定ファイル（テナント別）
   開通時はこのファイルの値だけを差し替える。index.html は触らない。

   ⚠️ このファイルは公開HTMLと一緒に配信される前提。
      → 秘密（トークン・合言葉・パスワード）はここに書かない。
      → 管理画面/経営の本当の関門は GAS 側 Script Property
        （KANRI_TOKEN / DASH_TOKEN・fail-closed）。ここのURL等は非秘密値のみ。
   ===================================================================== */
window.APP_CONFIG = {
  // 管理系 GAS のエンドポイント（公開URL）
  KANRI_GAS_URL: "https://script.google.com/macros/s/AKfycbyS5mrvfGnhDYJvLnGh-mzdAlig7mhiIvDwfpyYTvbh1RcCpWp2qmsZzzSBgSH0jie76A/exec",

  // パスワードを端末(localStorage)に保存する時のキー名（識別子・秘密ではない）
  STORE_KEY: "gr_admin_token",

  // 経費の管理者アプリURL（テナント別）。未設定ならリンクを出さない＝空のまま。
  EXPENSE_ADMIN_URL: "",

  // 予定管理アプリ（現場/人工/請求/Excel）へのリンク先
  YOTEI_APP_URL: "https://akirasp4-lgtm.github.io/gr-admin/demo/yotei/",

  // 会社名（表示・絞り込みに使用）
  COMPANIES: ['デモ会社'],          // 複数社なら ['A社','B社',...]
  COMPANY_NAME: 'デモ会社',         // 工番を発行する会社名。無ければ '' （工番・車両機能オフ）

  // 業種テンプレート（画面の言葉づかいを切り替える。中身のロジックは不変）
  //   generic（汎用）/ construction（建設）/ real_estate（不動産）/
  //   car_service（車屋）/ enterprise（大手企業）/ professional_service（士業）
  //   ※ 未設定なら construction（従来の見た目）。語の定義は index.html の INDUSTRY_LABELS。
  APP_INDUSTRY: 'generic'
};
