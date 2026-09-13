const capabilities = [
  ["01", "Brief Translation", "把品牌问题翻译成可执行的影像命题"],
  ["02", "Risk Control", "在开拍前识别产品、人物与连续性风险"],
  ["03", "Visual Direction", "建立资产、风格、镜头与声音的统一系统"],
  ["04", "Commercial Delivery", "用验收线管理修改，把创意收回到成交"],
] as const;

const method = [
  ["01", "Brief", "先确认真正要解决的品牌问题"],
  ["02", "Test", "高危镜头先做技术测试，只给一个可执行结论"],
  ["03", "System", "锁定角色、产品、场景和镜头资产"],
  ["04", "Story", "用故事承载产品，不让奇观抢走证据"],
  ["05", "Picture Lock", "补镜、精剪、声音分层，冻结画面"],
  ["06", "Delivery", "按故事、产品、节奏、连续性四线验收"],
] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function CaseStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="case-stat">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">跳到主要内容</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回顶部">
          <span className="brand-mark">Y</span>
          <span>YOYO</span>
          <small>AI DIRECTOR</small>
        </a>
        <nav aria-label="主要导航">
          <a href="#work">Selected Work</a>
          <a href="#method">Method</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <SectionLabel>AI COMMERCIAL DIRECTOR · YOYO</SectionLabel>
            <h1>
              把想象力
              <br />
              变成<span>商业证据</span>
            </h1>
            <p className="hero-lede">
              我不只生成画面。我把 Brief、技术风险、产品真实性、叙事节奏和最终交付，
              统筹成一支品牌敢于署名的商业片。
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#work">观看案例</a>
              <a className="button button-ghost" href="#method">查看导演方法</a>
            </div>
          </div>
          <div className="hero-visual" aria-label="汽车与咖啡两个商业案例画面">
            <figure className="hero-frame hero-frame-car">
              <img src="/media/car-frame-08.jpg" alt="风云T9L汽车穿越奇观场景" />
              <figcaption>PRODUCT TRUTH / SURREAL WORLD</figcaption>
            </figure>
            <figure className="hero-frame hero-frame-coffee">
              <img src="/media/coffee-frame-13.jpg" alt="隅田川咖啡广告动画人物镜头" />
              <figcaption>LIVE ACTION / ANIMATION / BRAND</figcaption>
            </figure>
            <div className="hero-seal" aria-hidden="true">
              <span>DIRECT</span>
              <b>02</b>
              <span>FILMS</span>
            </div>
          </div>
          <div className="hero-index">
            <span>BEIJING / CHINA</span>
            <span>COMMERCIAL · AIGC · MIXED MEDIA</span>
            <span>SCROLL TO ENTER ↓</span>
          </div>
        </section>

        <section className="director-statement">
          <div>
            <SectionLabel>DIRECTOR&apos;S STATEMENT</SectionLabel>
            <h2>AI只是生产方式。<br />导演的工作仍然是做判断。</h2>
          </div>
          <p>
            商业导演能力，不是画面越奇越好，而是知道哪里必须准确、哪里可以风格化；
            知道一个高危镜头什么时候值得攻坚，什么时候必须在客户确认前主动改写。
            最终让每一份技术选择都服务品牌，而不是服务工具炫技。
          </p>
        </section>

        <section className="capability-grid" aria-label="导演能力">
          {capabilities.map(([index, title, text]) => (
            <article key={index}>
              <span>{index}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>

        <section className="work-intro" id="work">
          <SectionLabel>SELECTED COMMERCIAL WORK</SectionLabel>
          <h2>两支片，两种难题，<br />同一套商业导演逻辑。</h2>
          <p>点击视频播放完整案例。向下查看从风险判断、资产控制到最终画面的制作证据。</p>
        </section>

        <article className="case case-car" id="car-case">
          <header className="case-heading">
            <div className="case-number">CASE 01</div>
            <div>
              <p>风云 T9L · AI品牌广告</p>
              <h2>让幻想有重量，<br />让产品有证据。</h2>
            </div>
            <div className="case-tags">
              <span>AUTOMOTIVE</span><span>PRODUCT FIDELITY</span><span>HYBRID PIPELINE</span>
            </div>
          </header>

          <div className="film-shell">
            <video controls playsInline preload="metadata" poster="/media/car-poster.jpg" aria-label="播放风云T9L汽车广告">
              <source src="/media/car-film.mp4" type="video/mp4" />
            </video>
            <div className="film-caption">
              <span>FULL FILM</span>
              <span>DIRECTED BY YOYO</span>
            </div>
          </div>

          <div className="case-summary">
            <div className="case-position">
              <SectionLabel>THE DIRECTORIAL PROBLEM</SectionLabel>
              <h3>奇观可以失真，<br />汽车身份不能失真。</h3>
            </div>
            <div className="case-copy">
              <p>
                这支片要把一辆真实量产车送进火锅、红汤和液体般的超现实世界。
                最大风险不是“生成不够炸”，而是车身比例、前脸、颜色、运动方向和座舱真实性在奇观中被稀释。
              </p>
              <p>
                我的决策是：先用三视图与真实素材建立产品基准，再把风格化权限交给环境；
                高危镜头提前拆解，片尾回到真实道路与座舱KV，让品牌证据完成收口。
              </p>
            </div>
            <div className="case-stats">
              <CaseStat label="核心命题" value="产品保真 × 奇观叙事" />
              <CaseStat label="关键控制" value="车型 / 方向 / 连续性" />
              <CaseStat label="交付结论" value="幻想有节制，产品可识别" />
            </div>
          </div>

          <section className="proof-block">
            <div className="proof-copy">
              <SectionLabel>01 · PRODUCT ANCHOR</SectionLabel>
              <h3>先做产品资产，<br />再谈镜头自由。</h3>
              <p>
                三视图不是美术附录，而是每个生成镜头的共同坐标。车头、侧面、尾部、颜色和轮廓先被锁定，
                镜头才有资格进入更夸张的环境。
              </p>
            </div>
            <figure className="proof-image wide">
              <img src="/media/car-asset-turnaround.jpg" alt="汽车产品三视图资产基准" />
              <figcaption>PRODUCT IDENTITY BOARD · FRONT / SIDE / REAR</figcaption>
            </figure>
          </section>

          <section className="proof-grid">
            <figure>
              <img src="/media/car-storyboard.jpg" alt="汽车广告黑白分镜稿" />
              <figcaption><b>02 · STORYBOARD</b><span>先证明空间、方向和动作能成立</span></figcaption>
            </figure>
            <figure>
              <img src="/media/car-keyframes.jpg" alt="汽车广告关键帧视觉稿" />
              <figcaption><b>03 · KEYFRAMES</b><span>把分镜翻译成统一的视觉世界</span></figcaption>
            </figure>
          </section>

          <section className="frame-sequence" aria-label="汽车广告镜头序列">
            {[
              ["/media/car-frame-05.jpg", "进入 · 建立异世界"],
              ["/media/car-frame-08.jpg", "卷入 · 风格升级"],
              ["/media/car-frame-12.jpg", "冲出 · 动作落点"],
              ["/media/car-frame-14.jpg", "回归 · 产品成交"],
            ].map(([src, caption], i) => (
              <figure key={src}>
                <img src={src} alt={`汽车广告关键镜头${i + 1}`} />
                <figcaption><span>0{i + 1}</span>{caption}</figcaption>
              </figure>
            ))}
          </section>

          <blockquote>
            “导演不是让每个镜头都一样奇，而是让奇观逐步升级，最后把注意力交还给产品。”
          </blockquote>
        </article>

        <article className="case case-coffee" id="coffee-case">
          <header className="case-heading">
            <div className="case-number">CASE 02</div>
            <div>
              <p>隅田川咖啡 · 混合媒介品牌广告</p>
              <h2>让现实进入动画，<br />身份始终不掉线。</h2>
            </div>
            <div className="case-tags">
              <span>BEVERAGE</span><span>CHARACTER CONTINUITY</span><span>MIXED MEDIA</span>
            </div>
          </header>

          <div className="film-shell">
            <video controls playsInline preload="metadata" poster="/media/coffee-poster.jpg" aria-label="播放隅田川咖啡广告">
              <source src="/media/coffee-film.mp4" type="video/mp4" />
            </video>
            <div className="film-caption">
              <span>FULL FILM</span>
              <span>DIRECTED BY YOYO</span>
            </div>
          </div>

          <div className="case-summary">
            <div className="case-position">
              <SectionLabel>THE DIRECTORIAL PROBLEM</SectionLabel>
              <h3>媒介可以切换，<br />主角身份与产品因果不能断。</h3>
            </div>
            <div className="case-copy">
              <p>
                现实骑行、饮用触发、热血动画、货车危机与品牌回归，需要在短时间里完成多次世界切换。
                真正的难点，是观众必须始终认得同一个人，也要明白咖啡为什么成为能量开关。
              </p>
              <p>
                我的方法是把黄帽、白T、裤装、面部与动作姿态做成角色锚点；
                产品在现实段先建立因果，动画只负责放大力量，最后再用真实瓶身与产品矩阵完成成交。
              </p>
            </div>
            <div className="case-stats">
              <CaseStat label="核心命题" value="真人 × 动画身份连续" />
              <CaseStat label="关键控制" value="角色 / 动作 / 包装准确" />
              <CaseStat label="交付结论" value="媒介切换，品牌不断线" />
            </div>
          </div>

          <section className="proof-block reverse">
            <figure className="proof-image wide">
              <img src="/media/coffee-character.jpg" alt="咖啡广告主角人物资产三视图" />
              <figcaption>CHARACTER IDENTITY BOARD · CLOSE-UP / FRONT / SIDE / BACK</figcaption>
            </figure>
            <div className="proof-copy">
              <SectionLabel>01 · CHARACTER ANCHOR</SectionLabel>
              <h3>观众不是认脸，<br />而是认一组稳定线索。</h3>
              <p>
                黄帽、白色上衣、卡其裤、鞋型和身体比例共同构成角色身份。
                从真人到动画，风格可以变化，但这些线索不能同时丢失。
              </p>
            </div>
          </section>

          <section className="proof-grid">
            <figure>
              <img src="/media/coffee-storyboard.jpg" alt="咖啡广告黑白分镜稿" />
              <figcaption><b>02 · STORYBOARD</b><span>把产品触发、身份切换和危机动作排清楚</span></figcaption>
            </figure>
            <figure>
              <img src="/media/coffee-keyframes.jpg" alt="咖啡广告关键帧视觉稿" />
              <figcaption><b>03 · KEYFRAMES</b><span>先统一两种媒介的色彩与能量方向</span></figcaption>
            </figure>
          </section>

          <section className="frame-sequence six" aria-label="咖啡广告镜头序列">
            {[
              ["/media/coffee-frame-04.jpg", "现实 · 产品出现"],
              ["/media/coffee-frame-08.jpg", "饮用 · 因果触发"],
              ["/media/coffee-frame-13.jpg", "切换 · 身份锚定"],
              ["/media/coffee-frame-17.jpg", "危机 · 动作升级"],
              ["/media/coffee-frame-22.jpg", "回归 · 世界衔接"],
              ["/media/coffee-frame-26.jpg", "Packshot · 成交"],
            ].map(([src, caption], i) => (
              <figure key={src}>
                <img src={src} alt={`咖啡广告关键镜头${i + 1}`} />
                <figcaption><span>0{i + 1}</span>{caption}</figcaption>
              </figure>
            ))}
          </section>

          <blockquote>
            “混合媒介不是两种风格拼在一起，而是用同一个角色、同一个因果和同一个品牌目标穿过两个世界。”
          </blockquote>
        </article>

        <section className="method" id="method">
          <div className="method-heading">
            <SectionLabel>YOYO&apos;S DIRECTING METHOD</SectionLabel>
            <h2>从Brief到Final，<br />每一步都必须能回答“为什么”。</h2>
            <p>
              我把AI制作当作一条可管理的商业生产线：先做判断，再做生成；先锁结构，再做精修。
            </p>
          </div>
          <div className="method-list">
            {method.map(([index, title, text]) => (
              <article key={index}>
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <i aria-hidden="true">↗</i>
              </article>
            ))}
          </div>
        </section>

        <section className="services">
          <SectionLabel>CAPABILITIES</SectionLabel>
          <div className="services-grid">
            <h2>AI商业导演<br />创意与全流程制作</h2>
            <ul>
              <li><span>01</span>商业Brief拆解与反Brief</li>
              <li><span>02</span>创意概念、脚本与分镜</li>
              <li><span>03</span>产品 / 人物 / 场景资产控制</li>
              <li><span>04</span>AI镜头生产与混合媒介设计</li>
              <li><span>05</span>剪辑、声音设计与交付验收</li>
            </ul>
          </div>
        </section>

        <section className="contact" id="contact">
          <div>
            <SectionLabel>COMMERCIAL INQUIRIES</SectionLabel>
            <h2>如果品牌问题值得被看见，<br />我们把它拍成一支片。</h2>
          </div>
          <div className="contact-card">
            <span>YOYO</span>
            <strong>AI COMMERCIAL DIRECTOR</strong>
            <p>品牌广告 · AI影像 · 混合媒介 · 商业导演</p>
            <p className="contact-note">合作邀约请通过本作品集的发送渠道联系 Yoyo</p>
            <a href="#top">BACK TO TOP ↑</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 YOYO · AI DIRECTOR</span>
        <span>IMAGINATION, DIRECTED.</span>
      </footer>
    </>
  );
}
