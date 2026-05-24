export const cardSections = [
  {
    id: 'section-auth',
    title: '🔹 信用卡授權與預授權',
    messages: [
      {
        id: 'pre-auth',
        title: '💁‍♂️ 信用卡預授權解釋',
        content: `Dear guest,
We only used your card to pre-auth the room rate.
When you check-in, you can use the same card, any Debit/Credit Card, or cash to pay the room rate.

Pre-authorizing a credit card puts a temporary hold on some of a customer's funds. The hold lasts approximately 30 days. The customer can't withdraw the money from an ATM or spend the money elsewhere while the hold is in place. However, no money is actually debited when a card pre-authorization takes place. When it comes time for the customer to pay, the funds on hold can then be converted to a charge.

尊敬的客人您好：
我們僅使用您的卡預授權房價。
入住時，您可以使用同一張卡、任何借記卡/信用卡或現金支付房費。

信用卡預授權會暫時凍結客戶的部分資金。暫停持續約 30 天。在暫停期間，客戶不能從 ATM 取款或將錢花在其他地方。但是，在進行卡預授權時，實際上並沒有扣款。當客戶需要付款時，凍結的資金可以轉換為費用。`,
      },
      {
        id: 'first-auth',
        title: '💁‍♀️ 信用卡首次授權通知',
        content: `Dear guest,
Thank you for booking with us. Since you have chosen to pay at the hotel, according to the booking platform's regulations, we need to use your provided credit card for pre-authorization, and temporarily hold a certain amount of credit to reserve the room. Today we will do the first pre-authorization for your order, and we will not charge you formally. If you receive a consumption notification, please don't worry. When you check in, you can use the same card, any financial card/credit card or cash to pay the room rate.

p.s. Credit card pre-authorization will temporarily freeze some of the customer's funds. The suspension lasts for about 30 days. During the suspension period, customers cannot withdraw money from ATMs or spend money elsewhere. However, no actual payment is made when the card is pre-authorized. When the customer needs to pay, the frozen funds can be converted into fees.

Looking forward to your arrival!
Best regards,
The Hotel Front Desk Team.

尊敬的貴賓您好：
感謝您選擇入住本館。由於您選擇現場付款，根據訂房平台的規定，我們需要進行信用卡預授權，以保留您的房間，這將需要暫時凍結一定金額的信用額度。今天，我們將進行首次預授權，但請放心，這不會產生實際的費用。在辦理入住手續時，您可以選擇使用相同的信用卡、其他金融卡/信用卡，或以現金支付房費。

請注意，信用卡預授權會在暫停期間凍結部分資金，通常為約30天。在此期間，您可能無法使用該資金進行提款或其他用途。然而，這不會導致實際扣款。當您需要支付房費時，凍結的資金將轉換為實際費用。

我們期待著您的到來，如果您有任何疑問或需要進一步的協助，請隨時與我們聯絡。

此致，
本館前台團隊`,
      },
      {
        id: 're-auth',
        title: '💁 信用卡重新授權通知',
        content: `Dear guest,
Thank you for booking with us.
As you have chosen to pay upon arrival, according to the rules of the booking platform, we need to use the credit card that you provided to pre-authorize and reserve the room by temporarily holding a certain amount of credit limit.

However, your pre-authorization is about to expire, so today we will renew the pre-authorization for your order. We will only hold your credit limit temporarily and will not charge you officially.
If you receive a consumption notification, please don't worry.
Looking forward to your arrival.

尊敬的旅客，感謝您選擇本館。
由於您選擇了到店付款，根據訂房平台的規定，我們需要使用您提供的信用卡進行預授權，並暫時持有一定的信用額度來預訂房間。
但是，您的預授權即將到期，因此今天我們將為您的訂單續訂預授權。我們只會暫時保留您的信用額度，不會正式向您收費。
如果您收到消費通知，請不要擔心。
期待您的到來！`,
      },
    ],
  },
  {
    id: 'section-issues',
    title: '🔹 信用卡交易問題通知',
    messages: [
      {
        id: 'card-holder',
        title: '💁‍♂️ 信用卡持卡人與入住人不同',
        content: `Dear guests:
Restaurants generally accept any debit/credit card or cash.
To ensure credit card security, the credit card used to book the room and the name of the guest must match the name of the guest at the time of booking.
You must change the credit card to the person who booked the room, or change the name of the check-in person.
Otherwise, the hotel may suspect fraud and refuse to accept the reservation or use it to pay for the room.
Your order may be canceled after the time limit, please note.

親愛的貴賓您好：
飯店通常接受任何借記卡/信用卡或現金。
為保障信用卡用卡安全，用於預訂客房的信用卡和入住人的姓名必須與預訂時客人的姓名一致。
您必須更換成訂房人本人的信用卡，或是更換入住人姓名，
否則住宿方可能懷疑盜刷並拒絕接受預訂或使用其支付房費。
逾時您的訂單將會被取消，請留意。`,
      },
      {
        id: 'cvv-error',
        title: '💁‍♀️ 信用卡安全碼錯誤',
        content: `Dear guest:
Your credit card security code is incorrect and the reservation cannot be completed.
Please change the available credit card information to complete the reservation.
Overdue your order may be canceled, thank you.

尊敬的客人：
您的信用卡安全密碼錯誤，無法完成訂房。
請您更換可使用的信用卡訊息，才能完成訂房。
逾時您的訂單將會被取消，請留意。`,
      },
      {
        id: 'insufficient',
        title: '💁 餘額不足通知',
        content: `Dear guest,
Thank you for choosing to stay with us.

According to the regulations of the booking platform, in order to secure your reservation, we need to temporarily authorize the credit card you provided and reserve a certain credit limit. However, we encountered an issue with the credit card, which shows "insufficient balance."

To complete the reservation process smoothly, please try using another valid credit card or confirm that the current card has enough credit available for the pre-authorization of the room payment. If not resolved in time, your reservation will be canceled.

We sincerely apologize for the inconvenience and appreciate your understanding and cooperation. We look forward to providing you with excellent service.

尊敬的客人您好，
感謝您選擇入住本館。

根據預訂平台的相關規定，為了保證您的房間預留，我們需要對您提供的信用卡進行暫時授權並保留一定的信用額度。然而，我們在處理您的信用卡時遇到了一些問題，顯示「餘額不足」。

為了順利完成訂房程序，請您嘗試使用另一張有效的信用卡，或確認現有信用卡的額度足夠進行房款預先授權。如逾期未處理，您的訂單將被取消。

我們深感抱歉並感謝您的理解與配合，期待為您提供優質的服務。`,
      },
      {
        id: 'declined',
        title: '💁‍♂️ 信用卡拒絕交易',
        content: `Dear Guest,
Thank you for choosing to stay with us.
According to the booking platform's policy, in order to secure your room, we need to temporarily authorize the credit card you provided and reserve a certain credit limit. However, we encountered an issue as your provided credit card shows "transaction declined".
To successfully complete the booking process, please try using another valid credit card or ensure that this card has international transaction capability enabled. Overdue your order may be canceled, thank you.
Thank you once again for your understanding and cooperation.

尊敬的貴賓您好：
感謝您選擇入住本館。
根據預訂平台的規定，為了預留您的房間，我們需要暫時授權您提供的信用卡並保留一定的信用額度，但是我們遇到了一些問題。您提供的信用卡顯示「拒絕交易」。
為了順利完成訂房程序，請您嘗試使用另一張可使用的信用卡，或確認此張信用卡是否已開啟國際刷卡功能。逾期您的訂單將被取消。
再次感謝您的理解與合作。`,
      },
      {
        id: 'unionpay',
        title: '💁 銀聯卡無法執行預先授權',
        content: `Dear Guest,
Thank you for choosing to stay with us.
As per the booking platform's policy, in order to secure your reservation, we need to temporarily authorize the credit card you provided and reserve a certain credit limit. However, UnionPay cards cannot be used for this pre-authorization process. We kindly ask that you provide a non-UnionPay credit card for the guarantee.
If the change is not made in time, your reservation will be canceled.
We appreciate your understanding and cooperation, and wish you a pleasant stay.

尊敬的貴賓您好，
感謝您選擇入住本館。

根據預訂平台的規定，為了確保您的房間預留，我們需要對您提供的信用卡進行暫時授權並保留一定的信用額度。然而，銀聯卡無法用於此預先授權程序。敬請您更換為其他非銀聯卡的信用卡進行擔保。

若逾期未完成更換，您的訂單將會被取消。

再次感謝您的理解與合作，祝您有一個愉快的入住體驗。`,
      },
    ],
  },
  {
    id: 'section-cancel',
    title: '🔹 信用卡交易問題未處理，取消通知',
    messages: [
      {
        id: 'not-updated',
        title: '💁‍♀️ 信用卡未更新 - 取消',
        content: `Dear Guest,
Due to the failure to update your credit card information within the specified time, your reservation has been automatically canceled by the system. If you still wish to stay with us, please place a new reservation. We appreciate your understanding and cooperation.
If you have any questions or need further assistance, please feel free to contact us.
Thank you!

尊敬的貴賓您好，
由於您未在規定時間內更新有效信用卡資訊，系統已自動取消您的訂單。如果您仍需入住，請重新下訂單。我們感謝您的理解與配合。
如有任何疑問或需要協助，請隨時聯繫我們。
謝謝！`,
      },
      {
        id: 'hotel-cancel',
        title: '💁 住宿方取消客人訂單（姓名不一致）',
        content: `Dear Guest,
We regret to inform you that your reservation will be automatically cancelled, as the name of the credit card holder does not match the name of the person who made the reservation. To proceed, please create a new reservation using a credit card that bears the same name as the reservation holder.

Kindly note that for all future bookings, the credit card holder's name must match the name of the guest making the reservation. Otherwise, the system will automatically deem the order invalid and cancel it within 24 hours.

Should you need any assistance or have further questions, please do not hesitate to contact us. We appreciate your understanding and cooperation.

親愛的貴賓您好：
由於您尚未將您的訂房人姓名及信用卡持有人姓名修改為一致，很抱歉必須通知您，本訂單將自動取消。如果您仍希望預訂房間，我們建議您重新預訂。請務必記住，在下訂新訂單時，訂房人姓名和信用卡持有人姓名必須相同，否則系統將自動將您新下訂的訂單標記為無效，並於24小時後取消該訂單。
如果您需要協助或有任何其他疑問，請隨時與我們聯絡。感謝您的理解與合作。`,
      },
    ],
  },
  {
    id: 'section-refund',
    title: '🔹 信用卡退款解釋',
    messages: [
      {
        id: 'refund-cancel',
        title: '👉 信用卡取消交易',
        content: `Dear Guest,
If you would like to cancel your card transaction, please let us know before our daily settlement time on the same day of purchase. We can cancel the transaction directly, and your credit card limit will usually be restored within the same day or the next day.
If the request is made after the daily settlement time, the cancellation will need to be processed through the credit card refund procedure, and the time for your limit to be restored will depend on your issuing bank's processing time.

Thank you for your understanding.

親愛的貴賓您好，
若您希望取消刷卡交易，於當日我們結帳前通知我們，我們可直接為您取消交易，您的信用卡額度通常會在當天或隔天恢復。
若已超過當日結帳時間，則需透過信用卡退刷流程辦理，額度恢復時間將依各發卡銀行作業時間而定。

感謝您的理解與配合。`,
      },
      {
        id: 'refund-process',
        title: '👉 退貨作業',
        content: `Dear Guest,
We have processed a manual refund on [填入退款日期]. Generally, it takes about 7–14 business days for banks to complete the refund process (processing may be delayed due to weekends or holidays). Once the refund is completed, the amount will be credited back to the credit card used for the purchase.
If you do not receive the refund after one month or beyond the agreed refund date, please contact us or your card-issuing bank so we can assist you in tracking the refund.

親愛的貴賓您好，
我們已於 [填入退款日期] 辦理人工刷退。一般來說，銀行處理退款作業約需 7～14 個工作天（遇假日或節日順延）。完成退貨作業後，款項將退回刷卡者的信用卡帳單。
若超過一個月或超過約定退款日仍未收到退款，請務必與我們或發卡銀行聯繫，以便協助查詢。`,
      },
    ],
  },
]

export const pinnedDirectory = [
  {
    title: '◆ 信用卡授權與預授權',
    links: [
      { id: 'pre-auth', label: '信用卡預授權解釋' },
      { id: 'first-auth', label: '信用卡首次授權通知' },
      { id: 're-auth', label: '信用卡重新授權通知' },
    ],
  },
  {
    title: '◆ 信用卡交易問題通知',
    links: [
      { id: 'card-holder', label: '信用卡持卡人與入住人不同', bold: true },
      { id: 'cvv-error', label: '信用卡安全碼錯誤', bold: true },
      { id: 'insufficient', label: '餘額不足通知' },
      { id: 'declined', label: '信用卡拒絕交易' },
      { id: 'unionpay', label: '銀聯卡無法執行預先授權' },
    ],
  },
  {
    title: '◆ 交易問題未處理，取消通知',
    links: [
      { id: 'not-updated', label: '信用卡未更新 - 取消訂單' },
      { id: 'hotel-cancel', label: '姓名不一致 - 住宿方取消' },
    ],
  },
  {
    title: '◆ 信用卡退款解釋',
    links: [
      { id: 'refund-cancel', label: '信用卡取消交易／退款時程' },
      { id: 'refund-process', label: '退貨作業' },
    ],
  },
]

export const langForumThreads = [
  {
    id: 'toc', title: '目錄', pinned: true,
    authorName: '前台值班櫃檯', time: '2025/1/8 晚上 7:46', dateLabel: '2025年1月8日',
    comments: 4, relativeDate: '超過 30 天以前',
    preview: '一、入住相關  ·  [入住須知]',
    type: 'toc',
    sections: [
      { heading: '一、入住相關', items: ['入住須知', '提早抵達/付費提早入住', '較晚抵達', '不確定日期 只有時間的入住詢問', '延遲退房', '詢問寄存行李', '詢問接機'] },
      { heading: '二、房型要求', items: ['房型升等詢問', '加床/嬰兒床/高腳椅', '禁菸房保證', '景觀房/高樓層需求'] },
      { heading: '三、餐飲服務', items: ['早餐說明', '客房送餐', '飲食限制/過敏說明'] },
      { heading: '四、設施與服務', items: ['停車資訊', '叫車/機場接送', '行李寄存', '周邊景點推薦', '詢問洗衣/烘衣'] },
      { heading: '五、住宿政策', items: ['寵物政策', '訪客探視規定', '未成年入住', '取消/修改訂單'] },
    ],
  },
  {
    id: 'checkin', title: '入住須知', authorName: '前台值班櫃檯',
    time: '2025/1/8 晚上 7:48', dateLabel: '2025年1月8日',
    comments: 8, relativeDate: '超過 30 天以前',
    preview: '中文 · EN · 日文 · 韓文',
    type: 'multilang',
    languages: ['中文', 'EN', '日文', '韓文'],
    replies: [
      {
        lang: '中文', title: '入住須知-中文',
        content: `【入住須知】
🔹 1. 入住時間：下午 3 點以後，若您提前抵達，可至櫃檯協助寄放行李。
🔹 2. 退房時間：上午 11 點以前，逾時將酌收每小時 NT$500，延遲退房或續住須視當日房況而定。
🔹 3. 環保政策：依臺北市政府環保局公告（府環資字第1133095072號），自 2025 年 7 月 22 日起，本館無提供一次性備品（如牙刷、牙膏、梳子等），請旅客自行攜帶個人衛生用品。
🔹 4. 禁止吸菸：全館室內空間、客房及陽台皆全面禁菸。
🔹 5. 寵物規定：恕不接待寵物入住（導盲犬除外）。
🔹 6. 房型資訊：本館所有雙人房均配置一張大床，恕無提供雙床房型。
🔹 7. 停車資訊：本館無附設停車場或特約車位，鄰近有多處付費停車場（如永吉豐、嘟嘟房），收費標準依各業者公告為準。
🔹 8. 加人收費：每房可免費入住一位 0 至 6 歲兒童；7 歲（含）以上或超出房型人數限制者，每人每晚酌收 NT$500（含基本備品，恕不含加床服務）。
🔹 9. 加床服務：本館無提供加床服務。
🔹 10. 早餐說明：房價不含早餐，步行五分鐘內有多家在地早餐店可供選擇。
🔹 11. 櫃檯服務：本館提供 24 小時櫃檯接待與服務。`,
      },
      {
        lang: 'EN', title: '入住須知-EN',
        content: `【Accommodation Notice】
Thank you for choosing to stay with us! Kindly take note of the following information:
🔹 Check-in: After 3:00 PM. If you arrive early, you may store your luggage at the reception.
🔹 Check-out: Before 11:00 AM. A late check-out fee of NT$500 per hour applies. Extension depends on room availability.
🔹 Environmental Policy: In accordance with Taipei City regulations (Ref. No. 1133095072), starting July 22, 2025, single-use amenities (e.g., toothbrushes, razors, shower caps, etc.) will not be provided. Please bring your own personal toiletries.
🔹 Non-smoking: Smoking is strictly prohibited in all rooms, balconies, and indoor areas.
🔹 Pets: Not allowed, except for guide dogs.
🔹 Room Type: All double rooms come with one large bed. Twin beds are not available.
🔹 Parking: No on-site or partner parking available. Paid public parking lots (e.g., Yong Ji Feng, Dudu Parking) are nearby. Fees depend on the parking provider.
🔹 Extra Guests: One child aged 0–6 may stay free of charge per room. Guests aged 7 and above, or exceeding the room occupancy, will be charged NT$500 per person per night (includes basic amenities; no extra beds available).
🔹 Extra Beds: Not available.
🔹 Breakfast: Not included. Several breakfast shops are located within a 5-minute walk.
🔹 Reception: Our front desk is available 24 hours for your convenience.

We look forward to welcoming you and wish you a pleasant stay!`,
      },
      {
        lang: '日文', title: '入住須知-日文',
        content: `【宿泊に関するお知らせ】
🔹 1. チェックイン：午後3時以降、早く到着される場合は、受付でお荷物をお預けいただけます。
🔹 2. チェックアウト：午前11時までにお願いいたします。スイートルームのチェックアウト遅延には、1時間につきNT$500の追加料金がかかります。
🔹 3. 台北市環境保護局（府環資字第1133095072号）の方針に従い、2025年7月22日より、使い捨てアメニティ（歯ブラシ、歯みがき粉、くしなど）の提供を終了いたします。
🔹 5. 当ホテルのダブルルームはすべて大きなベッドが設置されており、ツインベッドは提供しておりませんことをお詫び申し上げます。
🔹 6. 追加人数料金：各部屋には0〜6歳の子供1名まで無料で宿泊できます。7歳以上のお客様または部屋の定員を超える場合、1名につき1泊NT$500の追加料金がかかります（この料金には基本的なアメニティが含まれますが、エキストラベッドは提供されません）。
🔹 7. エクストラベッドのご利用はできません。
🔹 8. 駐車場：駐車場はございませんので、ご了承ください。
🔹 9. ペット：ペットの入館はご遠慮いただいております。
🔹 10. 朝食：朝食は料金に含まれておりません。
🔹 11. 受付：受付は24時間対応しております。ご質問があれば、いつでもご連絡ください。`,
      },
      {
        lang: '韓文', title: '入住須知-韓文',
        content: `【숙박 안내】
🔹 1. 체크인: 오후 3시 이후 가능합니다. 일찍 도착하시는 경우, 리셉션에 짐을 맡기실 수 있습니다.
🔹 2. 체크아웃: 오전 11시 이전에 완료해 주시기 바랍니다. 스위트룸의 체크아웃이 지연될 경우, 시간당 NT$500의 추가 요금이 부과됩니다.
🔹 3. 타이베이시 환경보호국(문서번호 제1133095072호)의 정책에 따라, 2025년 7월 22일부터 일회용품(칫솔, 치약, 빗 등)은 제공되지 않습니다.
🔹 4. 금연 정책: 본 호텔은 객실 및 건물 내 모든 구역에서 금연입니다.
🔹 5. 호텔의 모든 더블룸은 대형 침대가 비치되어 있으며, 트윈 침대는 제공되지 않음을 사과드립니다.
🔹 6. 추가 인원 요금: 각 객실에는 0-6세 어린이 1명이 무료로 숙박 가능합니다. 7세 이상의 고객님이나 객실 용량을 초과하는 경우, 1인당 1박 NT$500의 추가 요금이 부과됩니다(이 요금은 기본 시설을 포함하며, 엑스트라 베드는 제공되지 않습니다).
🔹 7. 엑스트라 베드를 제공할 수 없습니다.
🔹 8. 주차 공간은 제공되지 않습니다.
🔹 9. 애완동물은 출입할 수 없습니다.
🔹 10. 조식: 조식은 포함되지 않습니다.
🔹 11. 리셉션 운영 시간: 리셉션은 24시간 운영됩니다. 언제든지 편하게 문의해 주세요.`,
      },
    ],
  },
  {
    id: 'laundry', title: '詢問洗衣/烘衣', authorName: '前台值班櫃檯',
    time: '2025/2/9 上午 10:30', dateLabel: '2025年2月9日',
    comments: 8, relativeDate: '2025年2月9日',
    preview: '中文 · EN · 日文 · 韓文',
    type: 'multilang',
    languages: ['中文', 'EN', '日文', '韓文'],
    replies: [
      {
        lang: '中文', title: '詢問洗衣/烘衣-中文',
        content: `洗衣機和烘衣機皆位於一樓公共區域。

🔹 洗衣機：新台幣 30 元 / 1 次
🔹 烘衣機：新台幣 10 元 / 10 分鐘`,
      },
      {
        lang: 'EN', title: '詢問洗衣/烘衣-EN',
        content: `The washing machine and dryer are located in the public area on the first floor.

🔹 Washing machine: NT$30 per cycle
🔹 Dryer: NT$10 per 10 minutes`,
      },
      {
        lang: '日文', title: '詢問洗衣/烘衣-日文',
        content: `洗濯機と乾燥機は1階の共用エリアにございます。

🔹 洗濯機：新台湾ドル 30 元 / 1 回
🔹 乾燥機：新台湾ドル 10 元 / 10 分`,
      },
      {
        lang: '韓文', title: '詢問洗衣/烘衣-韓文',
        content: `세탁기와 건조기는 1층 공용 공간에 위치해 있습니다.

🔹 세탁기: 30 NTD / 1회
🔹 건조기: 10 NTD / 10분`,
      },
    ],
  },
  {
    id: 'early', title: '提早抵達/付費提早入住', authorName: '前台值班櫃檯',
    time: '2025/1/9 上午 9:44', dateLabel: '2025年1月9日',
    comments: 9, relativeDate: '超過 30 天以前',
    preview: '詢問提早入住 · 付費提早入住',
    type: 'multilang',
    groups: [
      { heading: '🔹 詢問提早入住', indices: [0, 1, 2, 3] },
      { heading: '🔹 要付費提早入住', indices: [4, 5, 6, 7] },
    ],
    replies: [
      {
        lang: '中文', title: '要求提早入住-中文',
        content: `親愛的貴賓：
感謝您的預訂。最早的入住時間是下午 3 點。如果您提前到達，可以將行李留在接待處，並在下午 3 點以後回來，屆時房間將準備好。
如果您有任何其他問題，請告訴我們。
我們期待著您的光臨。`,
      },
      {
        lang: 'EN', title: '要求提早入住-EN',
        content: `Dear guest:
Thanks for your reservation. The earliest check-in time is 3:00 PM. If you arrive early, you can leave your luggage at reception and come back after 3:00 PM — the room will be ready by then.
If you have any other questions, please let us know.
We are looking forward to your visit.`,
      },
      {
        lang: '日文', title: '要求提早入住-日文',
        content: `お客様へ
ご予約いただきありがとうございます！チェックインは午後3時から可能です。早めに到着された場合は、フロントにてお荷物をお預けいただき、午後3時以降にお戻りください。その時にはお部屋の準備が整っています。
他にご質問がございましたら、どうぞお気軽にお知らせください。
お客様のご来館を心よりお待ちしております！`,
      },
      {
        lang: '韓文', title: '要求提早入住-韓文',
        content: `친애하는 고객님:
예약해 주셔서 감사합니다！체크인 가능한 가장 이른 시간은 오후 3시입니다. 일찍 도착하신 경우, 짐을 리셉션에 맡기시고 오후 3시 이후에 다시 오시면 됩니다. 그때까지 객실 준비를 마치겠습니다.
기타 문의 사항이 있으시면 언제든지 말씀해 주세요.
고객님의 방문을 기대하겠습니다！`,
      },
      {
        lang: '中文', title: '付費提早入住-中文',
        content: `尊敬的貴賓您好：
關於提早入住，我們將收取每小時新台幣 500 元的額外服務費。是否可以提前入住，將視前一位客人退房時間及房間清潔情況而定。
若您有任何其他需求或問題，請隨時告知我們，我們將竭誠為您提供協助。感謝您的理解與支持，期待為您服務！`,
      },
      {
        lang: 'EN', title: '付費提早入住-EN',
        content: `Dear Guest,
Regarding early check-in, an additional service fee of NT$500 per hour will be charged. The availability of early check-in depends on the check-out time of the previous guest and the cleaning status of the room.
If you have any other requests or inquiries, please feel free to let us know. We will do our best to assist you. Thank you for your understanding and support. We look forward to serving you!`,
      },
      {
        lang: '日文', title: '付費提早入住-日文',
        content: `尊敬のお客様へ：
アーリーチェックインにつきましては、1時間あたり NT$500 の追加サービス料金が発生いたします。アーリーチェックインのご利用可否は、前のお客様のチェックアウト時刻と客室の清掃状況によって異なります。
その他ご要望やご不明点がございましたら、お気軽にお申し付けください。誠心誠意ご対応いたします。ご理解とご支援に感謝申し上げます。ご来館を心よりお待ちしております！`,
      },
      {
        lang: '韓文', title: '付費提早入住-韓文',
        content: `존경하는 고객님께：
얼리 체크인과 관련하여, 시간당 NT$500 의 추가 서비스 요금이 부과됩니다. 얼리 체크인 가능 여부는 이전 투숙객의 체크아웃 시간 및 객실 청소 상태에 따라 결정됩니다.
기타 요청 사항이나 문의 사항이 있으시면 언제든지 알려주세요. 최선을 다해 도와드리겠습니다. 이해와 지원에 감사드리며, 고객님을 모실 날을 기대합니다！`,
      },
    ],
  },
  {
    id: 'late-arrival', title: '較晚抵達', authorName: '前台值班櫃檯',
    time: '2025/1/9 上午 10:00', dateLabel: '2025年1月9日',
    comments: 4, relativeDate: '超過 30 天以前',
    preview: '中文 · EN · 日文 · 韓文',
    type: 'multilang',
    languages: ['中文', 'EN', '日文', '韓文'],
    replies: [
      {
        lang: '中文', title: '較晚抵達-中文',
        content: `親愛的貴賓您好：
前台24小時有工作人員，您可以在半夜辦理入住手續，若超過21點抵達，可先傳訊息告知住宿方。
如果您還有其他需求，請隨時與我們聯繫。
我們期待您的光臨。`,
      },
      {
        lang: 'EN', title: '較晚抵達-EN',
        content: `Our front desk is staffed 24 hours a day, allowing you to check in at any time, even late at night. If you expect to arrive after 9:00 PM, please feel free to inform us in advance so we can prepare accordingly.
Should you have any other requests, do not hesitate to contact us. We are here to assist you.
We look forward to welcoming you soon!`,
      },
      {
        lang: '日文', title: '較晚抵達-日文',
        content: `親愛なるお客様：
メッセージをお送りいただき、ありがとうございます！
フロントは24時間体制でスタッフが対応しており、深夜でもチェックインが可能です。もし午後9時以降にご到着される場合は、事前にご連絡いただけますようお願い申し上げます。
その他ご不明点がございましたら、どうぞお気軽にお問い合わせください。
お客様のご来館を心よりお待ちしております！`,
      },
      {
        lang: '韓文', title: '較晚抵達-韓文',
        content: `저희 프런트 데스크는 24시간 운영되며, 늦은 밤에도 언제든지 체크인 하실 수 있습니다. 만약 오후 9시 이후에 도착하실 예정이시면, 미리 알려주시면 준비를 해드리겠습니다.
기타 요청 사항이 있으시면 언제든지 연락 주시기 바랍니다. 저희는 언제든지 도와드릴 준비가 되어 있습니다.`,
      },
    ],
  },
]

export const reviewForumThreads = [
  {
    id: 'rev-toc', title: '目錄', pinned: true,
    authorName: '前台值班櫃檯', time: '2025/1/10 下午 2:00', dateLabel: '2025年1月10日',
    comments: 2, relativeDate: '超過 30 天以前',
    preview: '一、正面評價  ·  二、需改善  ·  三、中立',
    type: 'toc',
    sections: [
      { heading: '一、正面評價回覆', items: ['五星好評－中英通用', '讚美服務人員', '讚美房間/設施', '讚美地點/交通便利'] },
      { heading: '二、需改善評價回覆', items: ['設施問題致歉', '服務疏失致歉', '噪音問題回覆', '退房延遲抱怨'] },
      { heading: '三、中立評價回覆', items: ['感謝並說明改進', '邀請再次入住'] },
    ],
  },
]

export const textChannels = {
  'maintenance': {
    name: '維修報修',
    messages: [
      {
        id: 'mt-1',
        author: '前台值班櫃檯',
        avatarEmoji: '🖥️',
        roleColor: '#b9bbbe',
        time: '2026/4/28 晚上7:53',
        dateLabel: '2026年4月28日',
        boldTitle: '維修報修公版',
        content: `報修申請\n\n報修日期：\n項目名稱：\n故障狀況：\n\n報修回覆：`,
        isEdited: true,
      },
      {
        id: 'mt-2',
        author: '前台值班櫃檯',
        avatarEmoji: '🖥️',
        roleColor: '#b9bbbe',
        time: '2026/5/19 下午5:01',
        dateLabel: '2026年5月19日',
        content: `報修申請\n報修日期：05/15\n項目名稱：101馬桶蓋\n故障狀況：鬆脫 疑似螺絲斷裂\n報修回覆：已報修`,
        image: '/toilet.webp',
      },
    ],
  },
  'handover-daily': {
    name: '202605每日交接',
    messages: [
      {
        id: 'hd-1',
        author: 'vivian',
        avatarEmoji: '🕵️',
        roleColor: '#e67e22',
        time: '2026/5/19 下午5:02',
        dateLabel: '2026年5月19日',
        content: '◆ R402 vivian chen 5/18-5/19，明日5/19換單換房住R306，已告知外出須先將行李拿至樓下',
        reactions: [{ emoji: '✅', count: 1 }],
      },
      {
        id: 'hd-2',
        author: 'vivian',
        avatarEmoji: '🕵️',
        roleColor: '#e67e22',
        time: '2026/5/19 下午5:38',
        content: '◆ 明日5/19 上午十點廠商施工外牆招牌，請貼公告在電梯，並且當班人員需注意旅客通行安全',
        reactions: [{ emoji: '🙂', count: 1 }, { emoji: '✅', count: 1 }],
      },
    ],
  },
}

export const sidebarGroups = [
  {
    title: '櫃檯相關',
    items: [
      { key: 'maintenance', label: '維修報修' },
      { key: 'handover-daily', label: '202605每日交接' },
    ],
  },
  {
    title: '常用術語複製貼上',
    items: [
      { key: 'card', label: '信用卡中英訂單回覆' },
      { key: 'lang', label: '各語系訂單回覆', forum: true },
      { key: 'review', label: '評價回復', forum: true },
      { key: 'booking', label: '訂房範本' },
    ],
  },
  {
    title: '房務相關',
    items: [
      { key: 'handover', label: '2025-房務交接' },
      { key: 'laundry', label: '客房送洗備存' },
      { key: 'scrapped', label: '備品報廢、出庫' },
    ],
  },
  {
    title: '顧客服務',
    items: [
      { key: 'taxi', label: '叫車服務' },
      { key: 'parking', label: '停車資訊' },
    ],
  },
]
