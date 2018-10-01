import { mount } from '@vue/test-utils'
import SpeakerWithModal from '~/components/SpeakerWithModal'

describe('SpeakerWithModal', () => {
  const AVATAR_EVAN = require('~/assets/images/speakers/evan.jpg')
  const AVATAR_EVAN_2X = require('~/assets/images/speakers/evan@2x.jpg')

  it('img の srcset 属性をセットできる', () => {
    const wrapper = mount(SpeakerWithModal, {
      propsData: {
        name: 'Evan You',
        title: 'Vue.js クリエーター',
        avatar: AVATAR_EVAN,
        avatar2x: AVATAR_EVAN_2X,
        twitter: 'https://twitter.com/youyuxi',
        github: 'https://github.com/yyx990803',
        description: [
          'Evan は開発者、デザイナー、そしてクリエイティブコーダーです。彼は、リアクティブなコンポーネントでモダンな Web インターフェイスを構築するための JavaScript フレームワーク、Vue.js の作者です。',
          'かつて、GitHub で最もスターを集めたフルスタック JavaScript フレームワークであった Meteor の開発グループでも働いていました。Google Creative Lab で、さまざまな Google プロダクト向けの実験的な UI プロトタイプに、2年間取り組んでいた経験もあります。',
        ],
        sessionTitle: 'TBD',
        sessionOverview: [
          'TBD',
        ],
      },
    })

    expect(
      wrapper.find('.avatar img').attributes()['srcset']
    ).to.equal(`${AVATAR_EVAN}, ${AVATAR_EVAN_2X} 2x`)
  })
})