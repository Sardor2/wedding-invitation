import { FunctionComponent, useEffect, useState } from "react";
import weddingContent from "../content/weddingContent.json";
import { weddingAssets } from "../content/weddingAssets";
import styles from "./DekstopOrchid.module.css";

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const targetDate = new Date("2026-07-18T00:00:00").getTime();

const formatValue = (value: number) => value.toString().padStart(2, "0");

const DekstopOrchid: FunctionComponent = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownState>(() => {
    const difference = targetDate - Date.now();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      const difference = targetDate - Date.now();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        window.clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.topbar}>
        <div className={styles.topbarInner}>
          <a className={styles.brand} href="#top">
            <span className={styles.brandMark}>ШМ</span>
            <span className={styles.brandCopy}>Wedding Invitation</span>
          </a>
          <nav className={styles.nav} aria-label="Section navigation">
            <a href="#invitation">Приглашение</a>
            <a href="#couple">Пара</a>
            <a href="#events">События</a>
            <a href="#story">История</a>
            <a href="#location">Локация</a>
          </nav>
        </div>
      </header>

      <main id="top" className={styles.main}>
        <section className={styles.hero} id="invitation">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{weddingContent.hero.eyebrow}</p>
              <div className={styles.heroBlessing}>
                <span>{weddingContent.hero.blessingHeading}</span>
                <span>{weddingContent.hero.blessingText}</span>
              </div>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroScript}>Шахбоз</span>
                <span className={styles.heroAmpersand}>&</span>
                <span className={styles.heroScript}>Мохинур</span>
              </h1>
              <p className={styles.heroLead}>{weddingContent.hero.greeting}</p>
              <p className={styles.heroText}>{weddingContent.hero.invitation}</p>
              <div className={styles.heroMeta}>
                <div className={styles.dateBadge}>{weddingContent.hero.date}</div>
                <div className={styles.heroNote}>{weddingContent.hero.inviteTitle}</div>
              </div>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#events">
                  Открыть программу
                </a>
                <a className={styles.secondaryButton} href="#story">
                  Наша история
                </a>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroBackdrop}>
                <img src={weddingAssets.hero.backdrop} alt="" />
              </div>
              <div className={styles.heroAccent}>
                <img src={weddingAssets.hero.accent} alt="" />
              </div>
              <div className={styles.heroCard}>
                <div className={styles.heroCardLabel}>{weddingContent.hero.coupleNames}</div>
                <img src={weddingAssets.hero.ornament} alt="" className={styles.heroOrnament} />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="couple">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Познакомьтесь</p>
            <h2>{weddingContent.coupleIntro.title}</h2>
            <p>{weddingContent.coupleIntro.subtitle}</p>
          </div>

          <div className={styles.coupleGrid}>
            <article className={styles.profileCard} style={{ animationDelay: "80ms" }}>
              <div className={styles.profileImageWrap}>
                <img src={weddingAssets.couple.groom} alt={weddingContent.coupleIntro.groomName} />
              </div>
              <h3>{weddingContent.coupleIntro.groomName}</h3>
              <p>{weddingContent.coupleIntro.groomRelation}</p>
              <span>{weddingContent.coupleIntro.groomParents}</span>
            </article>

            <article className={styles.profileCard} style={{ animationDelay: "160ms" }}>
              <div className={styles.profileImageWrap}>
                <img src={weddingAssets.couple.bride} alt={weddingContent.coupleIntro.brideName} />
              </div>
              <h3>{weddingContent.coupleIntro.brideName}</h3>
              <p>{weddingContent.coupleIntro.brideRelation}</p>
              <span>{weddingContent.coupleIntro.brideParents}</span>
            </article>
          </div>
        </section>

        <section className={styles.countdownSection} aria-label="Countdown to wedding">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>До торжества осталось</p>
            <h2>Счетчик до важного дня</h2>
          </div>
          <div className={styles.countdownGrid}>
            {[
              { value: formatValue(timeLeft.days), label: weddingContent.countdown.days },
              { value: formatValue(timeLeft.hours), label: weddingContent.countdown.hours },
              { value: formatValue(timeLeft.minutes), label: weddingContent.countdown.minutes },
              { value: formatValue(timeLeft.seconds), label: weddingContent.countdown.seconds },
            ].map((item, index) => (
              <div className={styles.countdownCard} key={item.label} style={{ animationDelay: `${index * 90}ms` }}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <div className={styles.countdownDate}>{weddingContent.hero.date}</div>
        </section>

        <section className={styles.section} id="events">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Торжество</p>
            <h2>Два особенных момента</h2>
            <p>Программа дня собрана в спокойные, легко читаемые блоки, чтобы гостям было удобно ориентироваться.</p>
          </div>

          <div className={styles.eventsGrid}>
            {weddingContent.ceremonies.map((ceremony, index) => {
              const icon = index === 0 ? weddingAssets.ceremony.registrationIcon : weddingAssets.ceremony.celebrationIcon;

              return (
                <article className={styles.eventCard} key={ceremony.id} style={{ animationDelay: `${index * 100}ms` }}>
                  <img className={styles.eventIcon} src={icon} alt="" />
                  <h3>{ceremony.title}</h3>
                  <div className={styles.eventTime}>{ceremony.time}</div>
                  <div className={styles.eventVenue}>{ceremony.venue}</div>
                  <div className={styles.eventAddress}>{ceremony.address}</div>
                  <a className={styles.mapButton} href={ceremony.mapUrl} target="_blank" rel="noreferrer">
                    Открыть карту
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.storySection} id="story">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Личное</p>
            <h2>{weddingContent.story.title}</h2>
          </div>

          <div className={styles.storyGrid}>
            <figure className={styles.storyVisual}>
              <img src={weddingAssets.story.imageA} alt="" />
              <figcaption>{weddingContent.story.paragraphs[0]}</figcaption>
            </figure>
            <div className={styles.storyCopy}>
              <p>{weddingContent.story.paragraphs[1]}</p>
              <p className={styles.storyClosing}>{weddingContent.story.closing}</p>
            </div>
          </div>

          <div className={styles.galleryRail}>
            {weddingAssets.story.gallery.map((image) => (
              <img key={image} src={image} alt="" />
            ))}
          </div>
        </section>

        <section className={styles.locationSection} id="location">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Локация</p>
            <h2>{weddingContent.location.title}</h2>
            <p>{weddingContent.location.subtitle}</p>
          </div>

          <div className={styles.locationGrid}>
            <div className={styles.locationMapCard}>
              <iframe
                className={styles.locationMap}
                title={weddingContent.location.title}
                src={weddingContent.location.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                className={styles.mobileMapLink}
                href={weddingContent.location.mobileMapUrl}
              >
                Открыть в приложении карт
              </a>
            </div>

            <aside className={styles.locationDetails}>
              <div className={styles.locationAddressLabel}>Адрес</div>
              <div className={styles.locationAddress}>{weddingContent.location.address}</div>
              <p className={styles.locationHint}>
                Нажмите на ссылку под картой, чтобы открыть маршрут в мобильном приложении карт.
              </p>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DekstopOrchid;
