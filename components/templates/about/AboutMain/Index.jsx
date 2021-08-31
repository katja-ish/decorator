import styles from "./AboutMain.module.css";
import Image from "next/image";

const AboutMain = () => {
  return (
    <div className={styles.container}>
      <section className={[styles.section, styles.decorator].join(" ")}>
        <div className={styles.title}>Декоратор</div>
        <div className={styles.content}>
          <div className={[styles.image, styles.threeCol].join(" ")}>
            <Image
              src={"/images/decorator_00.png"}
              layout={"fill"}
              objectFit="contain"
              className={styles.imageSrc}
              priority
              quality={100}
            />
          </div>

          <div className={styles.paragraph}>
            Натела Манкаева окончила факультет прикладного искусства Московского
            текстильного института. В 2009 году основала бюро Декоратор N.
            Специализация — оформление интерьеров под ключ с полным циклом
            работ.
            <br />
            <br />
            Основательница студии Декоратор N справедливо гордится тем, что
            никогда не повторяется: Натела может сделать и успешную стилизацию
            французского шато, и современный городской ­интерьер. Может
            проектировать в любом стиле:
          </div>

          <q className={styles.quote}>
            «Главное, чтобы он был органичен с архитектурой здания, в котором
            находится интерьер, и с образом жизни заказчиков. Чем более
            индивидуальным получается пространство, тем успешнее решена задача».
          </q>
        </div>
      </section>

      <section className={[styles.section, styles.decoratorImages].join(" ")}>
        <div className={[styles.image, styles.threeCol].join(" ")}>
          <Image
            src={"/images/decorator_01.png"}
            layout={"fill"}
            objectFit="contain"
            className={styles.imageSrc}
            priority
            quality={100}
          />
        </div>

        <div className={[styles.image, styles.fiveCol].join(" ")}>
          <Image
            src={"/images/decorator_02.png"}
            layout={"fill"}
            objectFit="contain"
            className={styles.imageSrc}
            priority
            quality={100}
          />
        </div>
      </section>

      <section className={[styles.section, styles.philosophy].join(" ")}>
        <div className={styles.title}>Философия</div>
        <div className={styles.content}>
          <div className={[styles.image, styles.threeCol].join(" ")}>
            <Image
              src={"/images/philosophy_01.png"}
              layout={"fill"}
              objectFit="contain"
              className={styles.imageSrc}
              priority
              quality={100}
            />
          </div>

          <div className={styles.paragraph}>
            Идеальный Дом – это, когда переступая порог, чувствуешь, что он
            существует вместе с тобой, а не сам по себе. Идеальный Дом должен
            отражать личность своего хозяина, сочетаться с ним, дополнять – он
            как старый друг, к которому одинаково легко обращаться и когда тебе
            хорошо, и когда невыносимо плохо.
          </div>

          <div className={styles.quote}>
            К идеальному Дому не нужно привыкать, в нем не нужно осваиваться.
            <br />
            Даже если дом только построен, и внутри еще пахнет краской, вы
            видите <br /> его впервые, но в голове крутится только одна мысль:
            «Вот я и дома».
          </div>

          <div className={styles.paragraph}>
            Компания «Декоратор N» создает как раз такие, настоящие Дома.
            По-настоящему продуманные – от невероятного комфорта каждого
            предмета в отдельности и всего пространства в целом до гармоничного
            соединения различных стилей. В наших интерьерах нет стереотипов и
            штампов, засилья дизайнерских штучек и брендов. А есть органичное
            слияние человека и его дома. <br />
            <br />
            Мебель от «Декоратор N» – это европейские семейные фабрики, которые
            работают уже не первый век, но не ищут славы, а просто занимаются
            своим делом. Эта мебель никогда не выйдет из моды, она всегда вне
            времени – ручная работа, искусная отделка, дорогие породы дерева и
            бесконечное множество вариаций, чтобы выбрать то, что необходимо
            именно вам. А нужен вам всего лишь идеальный дом. Такой, чтобы
            всегда хотелось в него возвращаться. Такой, чтобы чувствовать себя,
            наконец, дома. Такой родной.
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.title}>Услуги</div>

        <div className={styles.content}>
          <div className={styles.paragraphBig}>
            Мы предлагаем широкий спектр услуг, который способен удовлетворить
            ваши потребности:
          </div>

          <ul className={styles.list}>
            <li className={styles.li}>Дизайн интерьера</li>
            <li className={styles.li}>Генеральное планирование</li>
            <li className={styles.li}>
              Согласование и проверка плана помещений
            </li>
            <li className={styles.li}>Эскизирование интерьеров в графике</li>
            <li className={styles.li}>3D визуализация</li>
            <li className={styles.li}>Индивидуальный дизайн мебели</li>
          </ul>
        </div>
      </section>

      <section className={[styles.section, styles.partners].join(" ")}>
        <div className={styles.title}>Партнеры</div>

        <div className={[styles.image, styles.threeCol].join(" ")}>
          <Image
            src={"/images/partners_01.png"}
            layout={"fill"}
            objectFit="contain"
            className={styles.imageSrc}
            priority
            quality={100}
          />
        </div>

        <div className={[styles.image, styles.twoCol].join(" ")}>
          <Image
            src={"/images/partners_02.png"}
            layout={"fill"}
            objectFit="contain"
            className={styles.imageSrc}
            priority
            quality={100}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.paragraphBig}>MURADOV/LINDE</div>
          <div className={styles.paragraph}>
            В реализации наших проектов мы тесно сотрудничаем с нашими
            партнерами – производителями деревянных изделий.
            <br />
            <br /> Для некоторых проектов двери, кухни, встроенные шкафы
            разрабатываются индивидуально для клиента дизайнером Нателой
            Манкаевой и изготавливаются эксклюзивно нашими партнерами.
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.title}>Адрес</div>

        <div className={styles.content}>
          <div className={styles.paragraphBig}>
            Москва
            <br />
            Филипповский переулок, 11 стр. 1 <br /> <br />
            Понедельник – Пятница, <br />С 10:00 до 19:00
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.title}>Контакты</div>

        <div className={styles.content}>
          <div className={styles.paragraphBig}>
            <a href={"tel:+7 (495) 691-68-85"}>+7 (495) 691-68-85</a>
            <br />
            <a
              href={"mailto:decorator-n@decorator-n.ru"}
              className={styles.mail}
            >
              decorator-n@decorator-n.ru
            </a>
          </div>

          <div className={styles.socials}>
            <div className={styles.icon}>
              <a
                href="https://www.instagram.com/decorator_n/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={"/icons/instagram-black.svg"}
                  layout={"fill"}
                  className={styles.iconSvg}
                />
              </a>
            </div>
            <div className={styles.icon}>
              <a href="https://facebook.com/">
                <Image
                  src={"/icons/facebook-black.svg"}
                  layout={"fill"}
                  className={styles.iconSvg}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMain;
