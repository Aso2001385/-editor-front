export const projectEditorRoot = {
  detail: true,
  icons: [
    {
      icon: 'help',
      text: 'クリックすると詳細な説明が表示されます',
    },
    {
      icon: 'text-box-multiple',
      text: 'ページ一覧を表示します',
    },
    {
      icon: 'eye-arrow-right',
      text: 'プレビューを表示します',
    },
    {
      icon: 'file-cog',
      text: '設定を表示します',
    },
    {
      icon: 'content-save',
      text: 'プロジェクトを保存できます\n',
    },
    {
      icon: 'arrow-u-down-left-bold',
      text: '前のページに戻ります',
    },
  ],
}
export const pageList = {
  detail: false,
  text: 'ページ名をダブルクリックして、別のページを編集することができます。',
  icons: [
    {
      icon: 'circle-edit-outline',
      text: '編集中のページです',
    },
    {
      icon: 'circle-small',
      text: '経過時間にカーソルを合わせると、最終更新日時が表示されます',
    },
  ],
}
export const setting = {
  detail: false,
  text: 'ダウンロードを行うと、自動でプロジェクトが保存されるためご注意ください。',
  icons: [
    {
      icon: 'content-save',
      text: '設定を保存します ( 編集中の文章は保存されません )',
    },
    {
      icon: 'download',
      text: 'プロジェクトをZip形式でダウンロードします',
    },
  ],
}
export const settingList = {
  detail: false,
  text: 'ページ名をダブルクリックすることで\n別のページに移動できます。',
  icons: [
    {
      icon: 'content-save',
      text: '設定を保存します ( 編集中の文章は保存されません )',
    },
    {
      icon: 'drag',
      text: 'ページの順番を並べ替えます\n(ドラッグ&ドロップ)',
    },
    {
      icon: 'content-copy',
      text: 'ページを複製します',
    },
    {
      icon: 'circle-edit-outline',
      text: '編集中のページです (編集中のページは削除できません)',
    },
    {
      icon: 'delete',
      text: 'ページを削除します',
    },
    {
      icon: 'delete-alert',
      text: 'ページを復元します',
      color: 'red',
    },
    {
      icon: 'plus-circle',
      text: 'ページを追加します',
    },
  ],
}
