describe('jquery.rollover', function () {
  var $img;
  var off = 'btn_off.png';
  var on = 'btn_on.png';

  beforeEach(function () {
    $img = $('<img>').attr('src', off).rollover();
    expect($img.attr('src')).to.be(off);
  });

  it('mouseenterで_offが_onになること', function () {
    $img.trigger('mouseenter');
    expect($img.attr('src')).to.be(on);
  });

  it('mouseleaveで_onが_offになること', function () {
    $img.trigger('mouseenter');
    expect($img.attr('src')).to.be(on);

    $img.trigger('mouseleave');
    expect($img.attr('src')).to.be(off);
  });
});

describe('isPast', () => {
  it('引数が過去の日付の場合はtrueを返す', () => {
    let date = new Date('2019/10/1');
    expect(isPast(date)).to.be(true);
  });
  it('引数が今日もしくは未来の日付の場合はfalseを返す', () => {
    let date = new Date;
    expect(isPast(date)).to.be(false);
    date = new Date('2019/10/31');
    expect(isPast(date)).to.be(false);
  });
  it('引数がDate型でない場合はエラーを返すこと', () => {
    expect(() => {
      isPast('2019/10/31');
    }).to.throwException('引数がDate型ではありません');
  });
  it('引数がInvalide Dateの場合はエラーを返すこと', () => {
    expect(() => {
      isPast(new Date('hoge'));
    }).to.throwException('引数がDate型ではありません');
  });
});

describe('getStatus', () => {
  context('完了している場合', () => {
    let closed = true;
    it('文字列closedを返す', () => {
      let due;
      expect(getStatus(due, closed)).to.be('closed');
    });
  });
  context('完了していない場合', () => {
    let closed = false;
    it('期限を過ぎていなかったら文字列openを返す', () => {
      let due = new Date();
      expect(getStatus(due, closed)).to.be('open');
      due = new Date('2019/10/31');
      expect(getStatus(due, closed)).to.be('open');
    });
    it('期限を過ぎていたら文字列runoutを返す', () => {
      let due = new Date('2019/10/1');
      expect(getStatus(due, closed)).to.be('runout');
    });
  });
});

describe('isValidEmail', () => {
  context('メールアドレスとして正しい文字列が入力された場合', () => {
    it('trueを返す', () => {
      expect(isValidEmail('k.kwbt4@icloud.com')).to.be(true);
    });
  });
  context('メールアドレスとして正しくない文字列が入力された場合', () => {
    const args = [
      'test@example',
      'test()@example.com'
    ];
    args.forEach(arg => {
      it(arg+'のときfalseを返す', () => {
        expect(isValidEmail(arg)).to.be(false);
      });
    });
  });
  context('文字列以外の値が渡された場合', () => {
    const args = [
      ['0のとき', 0],
      ['配列のとき', []],
      ['オブジェクトのとき', {}],
      ['booleanのとき', true],
      ['undefinedのとき', undefined],
      ['nullのとき', null],
      ['NaNのとき', NaN]
    ];
    args.forEach(arg => {
      it(arg[0] + 'falseを返す', () => {
        expect(isValidEmail(arg[1])).to.be(false);
      });
    });
  });
});
