describe('jquery.rollover', function() {
  var $img;
  var off = 'btn_off.png';
  var on = 'btn_on.png';

  beforeEach(function() {
    $img = $('<img>').attr('src', off).rollover();
    expect($img.attr('src')).to.be(off);
  });

  it('mouseenterで_offが_onになること', function() {
    $img.trigger('mouseenter');
    expect($img.attr('src')).to.be(on);
  });

  it('mouseleaveで_onが_offになること', function() {
    $img.trigger('mouseenter');
    expect($img.attr('src')).to.be(on);

    $img.trigger('mouseleave');
    expect($img.attr('src')).to.be(off);
  });
});

describe('isPast', () => {
  it('引数が過去の日付の場合はtrueを返す', () => {
    const date = new Date('2019/10/1');
    expect(isPast(date)).to.be(true);
  });
  it('引数が今日もしくは未来の日付の場合はfalseを返す', () => {
    let date = new Date;
    expect(isPast(date)).to.be(false);
    date = new Date('2019/10/31');
    expect(isPast(date)).to.be(false);
  });
});
