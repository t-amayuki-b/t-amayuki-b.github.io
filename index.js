/**
 * TextAlive App API basic example
 * https://github.com/taisukef/textalive-app-basic
 * forked from https://github.com/TextAliveJp/textalive-app-basic
 *
 * API チュートリアル「1. 開発の始め方」のサンプルコードを改変したものです。
 * 発声中の歌詞を単語単位で表示します。
 * また、このアプリが TextAlive ホストと接続されていなければ再生コントロールを表示します。
 * https://developer.textalive.jp/app/
 */

const { Player } = TextAliveApp;

//const songurl = "http://www.youtube.com/watch?v=ygY2qObZv24";
const songUrl = "https://www.nicovideo.jp/watch/sm35791694";

const appAuthor = "Amayuki";
const appName = "YY Sample";

const animateWord = (now, unit) => {
  if (unit.contains(now)) {
    text.textContent = unit.text;
  }
};

const player = new Player({ app: { appAuthor, appName }, mediaElement: media });

player.addListener({
  onAppReady(app) {
    if (!app.managed) {
      control.style.display = "block";
      const p = player;
      document.querySelectorAll(".play").forEach((btn) => btn.onclick = () => p.video && p.requestPlay());
      jump.onclick = () => p.video && p.requestMediaSeek(p.video.firstChar.startTime);
      pause.onclick = () => p.video && p.requestPause();
      rewind.onclick = () => p.video && p.requestMediaSeek(0);
      document.querySelector("#header a").setAttribute("href", "https://developer.textalive.jp/app/run/?ta_app_url=https%3A%2F%2Ftextalivejp.github.io%2Ftextalive-app-basic%2F&ta_song_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DygY2qObZv24");
    } else {
      document.querySelector("#header a").setAttribute("href", "https://textalivejp.github.io/textalive-app-basic/");
    }
    if (!app.songUrl) {
      player.createFromSongUrl(songurl);
    }
  },
  onVideoReady(v) {
    document.querySelector("#artist span").textContent = player.data.song.artist.name;
    document.querySelector("#song span").textContent = player.data.song.name;
    let w = player.video.firstWord;
    while (w) {
      w.animate = animateWord;
      w = w.next;
      DLineMotionManager();
    }
  },
  onTimerReady(t) {
    if (!player.app.managed) {
      document.querySelectorAll("button").forEach((btn) => btn.disabled = false);
    }
    jump.disabled = !player.video.firstChar;
  },
  onThrottledTimeUpdate(pos) {
    document.querySelector("#position strong").textContent = Math.floor(pos);
  },
  onPlay() {
    overlay.style.display = "none";
  },
  onPause() {
    text.textContent = "-";
  },
  onStop() {
    text.textContent = "-";
  },
});

function DLineMotionManager() {
  this.name = "ライン　複数モーション";
  this.type = PUBLIC | GRAPHIC;

  // @ui Slider(1, 50)
  // @title 線の太さ
  this.thickness = 1;

  // @ui Color()
  // @title 色
  this.color = new Color("#000000");

  // @ui Color()
  // @title 背景色
  this.bgColor = new Color("#FFFFFF");

  // @ui Slider(0, 20)
  // @title モーション１　出現頻度
  this.motion1Frequency = 1;

  // @ui Slider(0, 20)
  // @title モーション２　出現頻度
  this.motion2Frequency = 1;

  // @ui Slider(0, 20)
  // @title モーション３　出現頻度
  this.motion3Frequency = 1;

  // @ui Slider(0, 20)
  // @title モーション４　出現頻度
  this.motion4Frequency = 1;

  // @ui Slider(0, 20)
  // @title モーション５　出現頻度
  this.motion5Frequency = 1;

  // @ui Slider(0, 20)
  // @title モーション６　出現頻度
  this.motion6Frequency = 1;

  // @ui Slider(0, 20)
  // @title モーション７　出現頻度
  this.motion7Frequency = 1;

  // @ui Slider(0, 20)
  // @title モーション８　出現頻度
  this.motion8Frequency = 1;

  // @ui Slider(0, 20)
  // @title モーション９　出現頻度
  this.motion9Frequency = 1;

  // @ui Slider(0, 20)
  // @title モーション１０　出現頻度
  this.motion10Frequency = 1;

  // @ui Slider(0, 20)
  // @title モーション１１　出現頻度
  this.motion11Frequency = 1;

  // @ui Slider(0, 20)
  // @title モーション１２　出現頻度
  this.motion12Frequency = 1;

  // @ui Slider(0, 5)
  // @title モーション切り替わり頻度
  this.motionChangeFrequency = 2;

  // @ui Check()
  // @title 背景の有無
  this.backgroundEnabled = true;

  // @ui Slider(0, 5000)
  // @title 乱数シード
  this.seed = 0;

  var DUtil = require("DUtil@1247");
  var util = DUtil ? new DUtil() : null;

  var DLine1 = require("DLineMotion1@1278");
  var DLine2 = require("DLineMotion2@1279");
  var DLine3 = require("DLineMotion3@1280");
  var DLine4 = require("DLineMotion4@1281");
  var DLine5 = require("DLineMotion5@1282");
  var DLine6 = require("DLineMotion6@1283");
  var DLine7 = require("DLineMotion7@1284");
  var DLine8 = require("DLineMotion8@1285");
  var DLine9 = require("DLineMotion9@1286");
  var DLine10 = require("DLineMotion10@1287");
  var DLine11 = require("DLineMotion11@1288");
  var DLine12 = require("DLineMotion12@1289");

  var inited = false;
  var classes = [
    DLine1,
    DLine2,
    DLine3,
    DLine4,
    DLine5,
    DLine6,
    DLine7,
    DLine8,
    DLine9,
    DLine10,
    DLine11,
    DLine12
  ];
  var list = [];

  var frequencies = [];

  this.animate = function(now) {
    if (!inited) {
      for (var i = 0; i < classes.length; i++) {
        if (classes[i]) list.push(new classes[i]());
      }
      inited = true;
    }

    var u = this.getAssignedUnit();
    var g = u.graphics;
    var b = findBeat(now);

    // 背景
    if (this.backgroundEnabled) {
      g.beginFill(this.bgColor);
      g.drawRect(0, 0, width, height);
      g.endFill();
    }

    if (b) {
      /// シードの決定
      var tb = b;

      var m = 8,
        rate = 1;
      switch (this.motionChangeFrequency) {
        case 0:
          m = 8;
          break;
        case 1:
          m = 4;
          break;
        case 2:
          m = 2;
          rate = 0.33;
          break;
        case 3:
          m = 2;
          rate = 0.66;
          break;
        case 4:
          m = 2;
          break;
        case 5:
          m = 1;
          break;
      }
      if (m != 1) {
        var loop = true;
        while (loop) {
          while (tb.position % m != 1) {
            if (tb.previous) tb = tb.previous;
            else break; // 先頭
          }
          loop = false;
          if (rate < 1 && 1 < tb.position / m) {
            util.seed = this.seed + tb.index * 123;
            if (util.random() < rate && tb.previous) {
              loop = true;
              tb = tb.previous;
            }
          }
        }
      }
      util.seed = this.seed + tb.index * 123;

      /// モーション番号の選択
      var fsum = 0,
        mf,
        ct = 0;
      for (
        var i = 0;
        (mf = this["motion" + (i + 1) + "Frequency"]), 0 <= mf;
        i++
      ) {
        var f = mf;
        fsum += f;
        frequencies[i] = fsum;
        if (0 < f) ct++;
      }
      if (fsum == 0) return;

      var frand = util.rand(0, fsum);
      for (var i = 0, l = frequencies.length; i < l; i++) {
        if (frand < frequencies[i]) break;
      }
      n = i;

      // 有効なモーションが１つのみはシード固定
      if (ct == 1) util.seed = this.seed + 12345;

      var m = list[n];
      m.thickness = this.thickness;
      m.color = this.color;
      m.seed = this.seed;
      switch (n + 1) {
        case 1:
          if (ct == 1 || util.random() < 0.55) {
            m.amplitude = 0;
          } else {
            m.waveSpeed = util.randInt(-5, 5);
            m.waveLength = util.randInt(30, 70);
            m.amplitude =
              util.random() < 0.6
                ? util.randInt(10, 20)
                : util.randInt(75, 100);
          }
          m.linearRatio = util.randInt(3, 7);
          break;
        case 2:
          m.linearRatio = util.randInt(0, 6);
          break;
        case 3:
          break;
        case 4:
          break;
        case 5:
          m.seed = util.seed;
          m.num = util.randInt(30, 42);
          break;
        case 6:
          m.waveLineRatio = util.randInt(0, 4);
          break;
        case 7:
          m.direction = util.randInt(0, 1);
          break;
        case 8:
          m.seed = util.seed;
          m.num = util.randInt(48, 64);
          break;
        case 9:
          m.lineRatio = util.randInt(20, 40);
          break;
        case 10:
          break;
        case 11:
          m.seed = util.seed;
          m.num = util.randInt(15, 20);
          break;
        case 12:
          break;
      }
      m.draw(now, g, b);
    }
  };
}
