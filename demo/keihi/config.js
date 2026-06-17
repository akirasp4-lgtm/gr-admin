/* =====================================================================
   デモ経費精算アプリ 設定（テナント別・公開HTMLと同梱される前提）
   ★トークンは使わない方針（公開config に秘密を置かない）。
     submit は GAS 側で次の制約のみで守る：
       - 申請者は デモ太郎 / デモ花子 / デモ社長 のみ（ホワイトリスト）
       - 金額は 1〜1,000,000、日付は YYYY-MM-DD、category/memo は長さ制限
       - 書き込み先は EXPENSE_DRIVE_FOLDER_ID（デモ経費フォルダ）だけ
       - 管理系の機能には到達しない（経費申請の保存だけ）
   ・GAS_URL … demo-kanri GAS（公開・既存）。
   ・APPLICANTS … 申請者の固定3名（デモ専用）。
   ===================================================================== */
window.KEIHI_CONFIG = {
  GAS_URL: "https://script.google.com/macros/s/AKfycbyS5mrvfGnhDYJvLnGh-mzdAlig7mhiIvDwfpyYTvbh1RcCpWp2qmsZzzSBgSH0jie76A/exec",
  APPLICANTS: ["デモ太郎", "デモ花子", "デモ社長"]
};
