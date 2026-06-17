/* =====================================================================
   予定表3画面（index / admin / president / links）共通 設定ファイル
   開通時はこのファイルの値だけを差し替える。各HTMLは触らない。

   ⚠️ このファイルは公開HTMLと一緒に配信される前提。
      → ここに書く PIN は「画面のついたて（UIロック）」であり、秘密ではない。
        公開ソースを見れば誰でも読める前提で運用すること。
      → 本当の認証・改ざん防止は GAS 側 Script Property（fail-closed）で担保する
        （社長PIN＝GAS側 PRES_PIN、書込ゲート＝CAL_REQUIRE_TOKEN 等）。
      → トークン・合言葉・本番の鍵は絶対にここに書かない。
   ===================================================================== */
window.APP_CONFIG = {
  // 予定系 GAS のエンドポイント（公開URL）。index/admin/president で共通。
  YOTEI_GAS_URL: "https://script.google.com/macros/s/AKfycbzcZAwtMiqwzNjbwX__bbTXqzoQKpidgw76zCUWy2I06rN1EfedOFT9VKoqDlSd_Bg7/exec",

  // 会社名（表示・絞り込み）
  COMPANIES: ['デモ会社'],
  COMPANY_NAME: 'デモ会社',

  // ▼ UIロック用PIN（公開値・秘密ではない／本当の関門はGAS側Property）
  ADMIN_PIN: '1234',            // admin.html の入場PIN
  PRES_PIN_CLIENT: '1234',      // president.html の入場PIN（デモは1234統一。GAS側 PRES_PIN と一致させること）

  // president.html が入場済みフラグを保存する sessionStorage のキー名（識別子）
  STORE_KEY: 'pres-pin-ok-v1',

  // links.html（リンク集）の表示
  APP_TITLE: 'リンク集',                                  // ホーム追加時のアイコン名
  KANRI_APP_LABEL: '管理画面（案件・経理・顧客）',          // 管理画面リンクの見出し
  KANRI_APP_URL: 'https://akirasp4-lgtm.github.io/gr-admin/demo/kanri/'  // 管理画面リンク先
};
