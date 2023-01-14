export const projectEditors = {
  root: {
    detail: true,
    text: 'ページ名をダブルクリックすることで\n別のページに移動できます。',
    icons: [
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
        color: 'amber darken-3',
      },
    ],
  },
  pageList: {
    detail: false,
    text: 'ページ名をダブルクリックすることで\n別のページに移動できます。',
    icons: [
      {
        icon: 'content-save',
        text: '設定のみを保存できます\n',
        color: 'amber darken-3',
      },
      {
        icon: 'drag',
        text: 'ページの順番を並べ替えます\n(ドラッグ&ドロップ)',
      },
      {
        icon: 'content-copy',
        text: 'このページを複製します',
      },
      {
        icon: 'delete-circle',
        text: 'このページを削除します',
      },
      {
        icon: 'plus-circle',
        text: 'ページを追加します',
      },
    ],
  },
}
