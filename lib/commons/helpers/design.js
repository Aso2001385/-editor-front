export const designEditors = {
  root: {
    detail: true,
    text: 'ページ名をダブルクリックすることで\n別のページに移動できます。',
    icons: [
      {
        icon: 'arrow-u-down-left-bold',
        text: '前のページに戻ります',
      },
      {
        icon: 'file-cog',
        text: '設定を表示します',
      },
      {
        icon: 'content-save-alert',
        text: 'デザインを保存できます\n(未保存の状態です)',
        color: 'amber darken-3',
      },
    ],
  },
  designSettings: {
    detail: false,
    text: 'ページ名をダブルクリックすることで\n別のページに移動できます。',
    icons: [
      {
        icon: 'content-save-alert',
        text: '設定のみを保存できます\n(未保存の状態です)',
        color: 'amber darken-3',
      },
    ],
  },
}
