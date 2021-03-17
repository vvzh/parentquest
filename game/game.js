'use strict';
/*global m */
var game = game || {};

(function () {

	game.id = "parentquest";
	game.name = "Творческое послание";
	game.footer = "Родительский университет, выпуск 2021";
	game.firstLocationId = 'l1';

	game.locations = {
		'l1': {
			'title': "Вступление",
			'text': "Солнечный свет залил аудиторию экзаменационной комиссии. Престижный ВУЗ с вековой историей распахнул свои двери для талантов со всей страны. Главное что объединяло этих молодых людей это желание устроиться в жизни как можно лучше и, по мнению большинства приезжих на экзамены, исторический центр столицы был наилучшим отправным пунктом. Наш герой на удивление легко справлялся с полученным заданием, женский голос четко диктовал ему ответы в наушник, спрятанный в рукаве красивой рубашки. Экзамен подходил к концу и внимание юноши было уже занято не материалами поступления, а распознаванием окружающих его людей по половому признаку. На удивление экзаменуемого, большинством абитуриентов на этот факультет были симпатичные девушки разодетые в строгие блузы, юбки. Каблучки стучали по паркету и шорох документов на столах экзаменаторов переносил фантазию героя на самые последние этажи дорогостоящих офисов престижных компаний. Уверенный в высоком результате проходного бала молодой человек уже был увлечён проекцией своего успеха и выбирал предположительный круг лиц тех женщин, с кем он готов был разделить свой осязаемый успех. Теперь он задумался:",
			'ways': [{
				'text': "Выбрать для себя девушку с широкими запястьями и крупными икроножными мышцами – свидетельствами плодородности для создания в последующем с ней семьи",
				'target': 'l2',
			},{
				'text': "Подобрать себе подругу с узкими бёдрами и выкрашенными волосами, что определит их отношения в непродолжительный роман",
				'target': 'l1n1',
			}],
		},
		'l1n1': {
			'title': "Подруга",
			'text': "Звонкий голос и раскрепощенное общение девушки привлекло внимание героя нашей истории ещё при подаче документов за месяц до даты экзамена. Будущая сокурсница вела себя непринуждённо и легко отвечала на знаки внимания абитуриентов с потока. Вокруг неё были подружки, она была яркой искоркой, освещающей сумрак сомнений молодых людей, настраивающихся на обучение в этом Университете. Постоянные шутки и прямые взгляды в глаза собеседников характеризовали ее как человека общительного и жаждущего новых знакомств. Когда герой встретил ее на первом экзамене у него не осталось сомнений в том, что это «знак свыше» и сдав свою экзаменационную работу сразу после неё, поспешил выйти из аудитории. Определенное облегчение после экзамена позволило завязаться между ними очередной непринуждённой беседе в которой молодые люди познакомились поближе. Мария, так звали ее, жила совсем недалеко от здания ВУЗа, и нашему герою удалось проводить ее до дома. Так они стали друзьями. Позже их шутки в общении и переписке переросли в непродолжительный роман, который позже привёл главное действующее лицо этой истории к знакомству с несколькими её подругами. Пока шли эти долгие, по мнению молодого человека, пять лет обучения некоторые сокурсники смогли обзавестись семьями и детьми, кто то встретил свою судьбу на практике во время летних каникул, а нашему герою за неимением обязательств пришла идея поступить в другой университет для получения ещё одного высшего образования...",
			'ways': [{
				'text': "Продолжить",
				'target': 'l1',
			}],
		},
		'l2': {
			'title': "Девушка",
			'text': "Внимание героя привлекла скромно одетая девушка за первой партой напротив экзаменатора. Абитуриентка была одета в блузу с рукавом три четверти, волосы были убраны в строгую прическу, никаких свидетельств о дополнительных материалах по существу экзамена замечено не было. Девушка, ни на кого не отвлекаясь, постоянно что-то писала в своём экзаменационном листе с усердием и ровной осанкой. Она просто излучала прилежность, трудолюбие и компетенцию. Сразу было понятно, что этот человек пришёл учиться и устраивать свою жизнь. Прошло ещё немало студенческих вечеринок, на которых наш герой безуспешно пытался разыскать её, но подобные мероприятия она не посещала...</p><p>Во время последующего обучения, уже после экзаменов, ему было сложно найти с ней общий язык. Виктория, так звали пассию нашего героя. Это имя вдохновляло его на новые попытки взятия этой высоты, он был настроен на Победу!</p><p>Только посвятив достаточно времени изучению её любимого предмета, герой истории нашёл к сокурснице научный подход, благодаря чему, после огромного количества знаков внимания, между ними установились доверительные отношения.</p><p>К дипломной работе эта благочестивая пара готовилась вместе и результатом их плодотворного труда стали два красных диплома. Шли годы и наш, некогда абитуриент, встал перед выбором:",
			'ways': [{
				'text': "Сделать предложение для развития отношений",
				'target': 'l3',
				},{
				'text': "Оставить эту дружбу вместе со студенческим билетом",
				'target': 'l1n1',
			}],
		},
		'l3': {
			'title': "Предложение",
			'text': "Виктория с радостью согласилась. Её родители поспособствовали получению ипотеки в Новопеределкино и молодая семья сыграв скромную, но честную свадьбу съехались уже в свою квартиру. Шло время, оба молодых человека посвящали будние дни работе, а на выходных собирались в клубах по интересам или проводили тихие семейные вечера перед телевизором. В перерывах между картинами начали возникать неловкие паузы в общении, все интересы были обсуждены...</p><p>В их окружении стали появляться семейные пары с детьми и круг общения постепенно начал сужаться. Наш герой начал ощущать необходимость изменений в своей жизни. После очередного совещания руководства в юридической фирме, где трудился наш герой, до его сведения было доведено, что в организации открывается новое подразделение международного права и для сохранения рабочего места ему необходимо поступить в университет для получения второго высшего образования. По непонятным для него обстоятельствам, супруга все чаще говорила о том, что ей хочется завести ребёнка, а ему пора сменить место работы. Наш герой недоумевал, как в такой обстановке можно делать выбор. Сделать выбор между тем что поможет тебе достичь конечной цели и самой целью было невыносимо тяжело. Наш герой был нацелен на успех и головой понимал, что в настоящих условиях появление ребёнка создаст для него в первую очередь финансовые трудности и совсем другое дело когда он уже получит второе высшее и станет получать довольствие в €... вот о чем мечтал наш герой ещё за той партой на первом экзамене. По другую сторону его ментальных баррикад было понимание того что появление ребёнка в семье это однозначно Новый уровень ответственности дающий и большие возможности для развития, тем более что этого так хотела его Любимая женщина. Герой был на распутии:",
			'ways': [{
				'text': "Снова поступить в Университет",
				'target': 'l3n1',
				},{
				'text': "Подойти к Рождению ребёнка",
				'target': 'l4',
			}],
		},
		'l3n1': {
			'title': "Поступить",
			'text': "Не смотря на уговоры жены, наш герой принял волевое решение сохранить позиции в текущем рабочем процессе и поступить в университет для получения ещё одного высшего образования. Подготовка к экзаменам с увеличившейся текущей нагрузкой занимала у него все больше времени. Он стал поздно возвращаться с работы, нарастающее напряжение повлекло за собой увеличение время затрат на отдых и снижение качества этого отдыха. Места которые семейная пара посещала раньше стали не актуальны, кинокартины перестали быть интересны для совместного просмотра. Виктория так же стала проводить больше времени со своими коллегами по работе на другом конце Москвы, что привело её к знакомству с очень интересным человеком, инструктором по Йоге. Пришёл день экзамена.",
			'ways': [{
				'text': "Продолжить",
				'target': 'l1',
			}],
		},
		'l4': {
			'title': "Рождение ребенка",
			'text': "Преодолев все страхи и опасения наш герой доверился ходу Жизни и сменил место работы. Став уделять больше внимания своей супруге вскоре он узнал о том, что у них будет ребёнок. Радости не было предела. В один момент пролетевшие полгода капризов супруги и пара бессонных ночей привели нашего героя на порог Новой Жизни. Не заставившее себя долго ждать повышение в новой организации, на несколько этажей выше предыдущего офиса, обеспечило возможность переезда молодой семьи в более комфортные условия. Новоиспеченному Начальнику Фирма предоставила служебный автомобиль более высокого класса, чем был у него до этого. Двери возможностей и роста по непредвиденным обстоятельствам распахнулись перед главой семейства. Началась Реально Новая Жизнь. Естественно, эта жизнь была непривычна и с облегчением в одной сфере, пришли трудности в другой. Теперь наш герой ехал домой как на работу, а на работе мог хоть немного отдохнуть. Шло время. И шло оно без сна. То смена рациона, то режущиеся зубки, то не те ползунки... картина мира перевернулась, не оставалось свободного времени и сил.</p><p>Заканчивался третий год становления новой личности и наш герой встал перед выбором:",
			'ways': [{
				'text': "Начать работать с большей нагрузкой для оплаты частного садика с яслями от 3х лет",
				'target': 'l3n2',
				},{
				'text': "По совету супруги начать изучать непонятного для него «ВОС(ь)ПИТАНИЯ» в каком-то Родительском университете",
				'target': 'l5',
			}],
		},
		'l5': {
			'title': "Изучение",
			'text': "Начало образования в Родительском Университете определяло выбор кода Жизни. Так называемый биологический код, предусматривающий обеспечение жизнедеятельности членов семьи по разумению нашего героя не мог служить его собственному развитию, в то время как следование человеческому коду определяло развитие ответственности, справедливости, смелости и многих других качеств. С самого начала обучения стало известно и о Божественном коде служения, самопожертвования, ощущения единства со всем живым. Стало ясным, что обучение детей проходит не только в части навыков, но и в воспитании в них человеческих качеств характера. Полученные знания дали повод для новых разговоров и обсуждений внутри семьи, которые нередко приводили к обоснованному спору. В начале предстоящего очередного горячего спора у нашего героя возникла мысль:",
			'ways': [{
				'text': "Сказать ей всё что я думаю сразу, пока эмоции накалены!",
				'target': 'l5n1',
				},{
				'text': "Выдержать паузу и обсудить все позже",
				'target': 'l5n2',
			}],
		},
		'l5n1': {
			'title': "Сказать сразу (конфликт)",
			'text': "Конфликты в семье часто напоминают хождение по цирковой арене с выполнением одних и тех же действий участниками представления на радость зрителю! Рычащие львы, плачущие клоуны, и, нарочито правильно, выполняющие команды дрессировщика разукрашенные собачки, сменяют друг друга, не внося ничего нового в Жизнь зрителя. Представление за представлением, в котором можно скоротать время от скуки и повседневных дел – вот что собою представляет среднестатистическое заведение типа «Цирк-Конфликт». Совсем другое дело в конфликте между мужчинами. Конфликт для мужчины - прекрасная возможность для познания истины!",
			'ways': [{
				'text': "Продолжить",
				'target': 'l5',
			}],
		},
		'l5n2': {
			'title': "Выдержать паузу",
			'text': "Проявляя осмотрительность и тактичность супруги смогли выстраивать отношения на принципах уважения и самоконтроля. Давая друг другу остыть в нужный момент очередной аргументированной полемики, когда накал эмоций уже угас, родителям малыша удавалось приходить к спокойному изъяснению своих мыслей и в отсутствие давления со стороны собеседника каждый из них мог сделать собственный вывод, находя ответ на вопросы самостоятельно.",
			'ways': [{
				'text': "Продолжить",
				'target': 'l6',
			}],
		},
		'l6': {
			'title': "Письмо",
			'text': "Родители ощущали свой рост по мере взросления ребёнка. Для них стало очевидно, что важно быть искренним и честным, ведь, дети очень чувствительны и хорошо видят ложь и лицемерие.</p><p>Родительская Вера – это крылья, которые дадут возможность ребенку взлететь. Для этого необходимо расширять своё сознание, человек становится Человеком, когда является автор своего развития. Приходится нести ответственность за то, во что мы превращаем свою жизнь и жизнь окружающих нас людей, а не жить по принципу: «бери от жизни все». Имея ценностно-ориентированные взгляды на жизнь родители становятся примером для своих детей и когда придёт момент выбора пути перед самим ребёнком он будет руководствоваться не наказом родителя, но доброй волей и совестью.</p><p>Шли годы, мальчик подрастал. Он посещал детский сад, потом пошёл в школу. Всегда ориентированные на гуманный принцип педагогики родители давали ему пояснения о бессмысленности авторитарных методов, ребёнок не чувствовал страха перед своими родителями и всегда мог обратиться к ним за советом. Но, возраст берет своё и у мальчика на некоторые вещи начала формироваться своя точка зрения, которую он не боялся отстаивать. Произошёл первый конфликт. Наш герой, будучи умудрённый опытом Родительского Университета, но тем не менее оставаясь Главным в семье имел непростое детство. Он становился как личность без отца и простым вещам, таким как послушание и уважение, его учила Улица, а не с любовью умудрённые старцы. Глава семейства не знал как поступить ему в конфликте.",
			'ways': [{
				'text': "Ограничить своего сына в общении со сверстниками на целый месяц, тем самым затянув с ним конфликт",
				'target': 'l5n1',
				},{
				'text': "Написать ему письмо",
				'target': 'l6n2',
			}],
		},
		'l6n2': {
			'title': "Письмо",
			'text': "Была суббота и школьный день был коротким. Родители забрали мальчика со школы, по обыкновению выходного дня, вдвоём и уже к полудню обедали в своей просторной столовой с видом на реку. Виктория запланировала поездку к родителям и после десерта покинула обитель.</p><p>Мужчины остались дома наедине.</p><p>Это был удачный момент для разговора.</p><p>Отец вручил ребёнку письмо в закрытом конверте и попросил ознакомиться с документом. Это выглядело как настоящее задание для сотрудника. Этот антураж был создан для того чтобы коснуться сознания своего ребёнка, для установления доверия и укрепления взаимной честности. Для этой задачи перед школьником была открыта дверь кабинета, и он смог с головой погрузиться в свою собственную работу.</p><p>Письмо было написано с полной утверждающей искренностью, с предельной откровенностью, без упреков, морали, назиданий.</p><p>После молчаливой паузы отец и сын смогли спокойно обсудить волнующие их моменты и эта переписка стала верным способом прояснения недоразумений в их отношениях на долгие долгие годы.",
			'ways': [{
				'text': "Продолжить",
				'target': 'l7',
			}],
		},
		'l7': {
			'title': "«Конфликтология»",
			'text': "Если своему ребёнку всегда можно написать письмо, в котором возможно настроить своё сердце на любовь, проявить чувство родительской веры и описать, что Вы испытываете к своему ребенку, то своему окружению не всегда все можно изложить на бумаге. Причина любого конфликта уходит корнями в неоправданные ожидания, тот момент когда желаемое не совпадает с действительным является отправной точкой любого конфликта. Это, своего рода, выход из зоны комфорта, а как известно из зоны собственного комфорта человек выходит господином, ведь это «его» зона. Вот и в ситуации на работе, когда нашему герою была очевидна предстоявшая проблематика нового дела – он с усердием убеждал своё начальство о необходимости принятия мер для предотвращения ситуации. Труды были напрасны, ситуация произошла и по обыкновению законов материальной деятельности в произошедшем обвинили именно того кто об этом и предупреждал.</p><p>Негодованию нашего героя не было предела. Конфликт вышел за рамки правового поля и стал личной досадой фигуранта. Он никак не мог понять почему так произошло. Как, как его могли обвинить в том, о чем он сам предупреждал?! Почему никто его не послушал.?! Особенно сложно было понять это исходя из позиции господина, но имея на тот момент в подчинении порядка 30 человек, да ещё и с большим стажем и опытом, чем у руководства, наш герой оставался стоять на своём. Как-то ночью, находясь в раздумьях о произошедшем в фирме, он, пролистывая аудиозаписи лекций Родительского Университета, обнаружил интересный отрывок, в котором говорилось о том что позиция ученика зачастую даёт возможность выхода из конфликта. Не спав всю ночь, перед поездкой к руководству, нашему герою пришлось выбрать линию поведения в предстоящем разговоре.",
			'ways': [{
				'text': "Отстаивать свои взгляды на произошедшее",
				'target': 'l7n1',
				},{
				'text': "Постараться понять в чем суть дела",
				'target': 'l7n2',
			}],
		},
		'l7n1': {
			'title': "Отстаивать",
			'text': "По приезде в головной офис наш герой встретил начальника, руководителя и заместителя генерального это были три разных должностных лица. После очередного заседания конференц-зал освободился, и нашего сотрудника пригласили на разговор. Он долго пытался доказать свою точку зрения, приводя различные факты и весомые аргументы в пользу собственной правоты и предусмотрительности. Его доказательства были неоспоримы, но чем дольше продолжалось это совещание, тем больше входящих звонков и людей вмешивалось в этот процесс. Сначала из зала заседаний вышел Заместитель, затем Руководитель переключился на длительную беседу по телефону, а Начальнику нечего было доказывать, так как он не влиял ни на что кроме урезания заработной платы, что и так было озвучено в ходе этой никому не интересной дискуссии. Пояснительные записки после предъявления были убраны в портфель и наш герой удалился из зала заседаний",
			'ways': [{
				'text': "Продолжить",
				'target': 'l7',
			}],
		},
		'l7n2': {
			'title': "Понять",
			'text': "По приезде в головной офис наш герой встретил начальника, руководителя и заместителя генерального это были три разных должностных лица. После очередного заседания конференц-зал освободился и нашего сотрудника пригласили на разговор. Он внимательно слушал то о чем говорили эти люди. Их показания разнились, они пытались выудить друг из друга какие-то нелепые доказательства неправоты приглашённого, сводя все к уменьшению гонорара за ещё не проигранное дело. В воздухе витала атмосфера недоверия и безответственности. Порученное нашему герою дело ещё не было завершено, а о нем говорили уже как о проигранном. Поняв это, фигурант дела предложил отказаться от выполнения должностных обязанностей, но его стали просить довести дело до конца, тем самым в очередной раз продемонстрировав неоднозначность позиции руководства. Дело было шито белыми нитками, от сотрудника хотели избавиться, вынуждая ещё немного поработать бесплатно.</p><p>Он принял для себя решение прекратить трудовую деятельность в этой организации. Разговор был окончен, все покинули свои места в привычной манере, а наш герой покинул встречу настоящим Господином, оставаясь в позиции Ученика...",
			'ways': [{
				'text': "Продолжить",
				'target': 'l8',
			}],
		},
		'l8': {
			'title': "Воспитание мальчика",
			'text': "Зачастую Жизнь биполярна. Прийти к целостности в душе возможно. Во многом этому способствует духовное развитие. Родительский Университет, обучившись в котором, наш главный герой проучил огромное количество информации, которая позже, укоренившись в сознании, начала, подобно огромному дереву, раскидистыми ветвями окружать нерушимый ствол принципов главы семейства, так же дал ему и знания о силе рода. Сакральные знания... эти математические доказуемые аксиомы не давали покоя, все в сознании собиралось воедино. И дед и отец и его собственный сын были звеньями одной цепи по определению, но только теперь, наш герой принимал решения с осознанием последствий. Он понимал что наказание за плохое поведение и давление на чувство вины напрямую ведёт к безответственности ребёнка, получалось, что : «Да, я виноват, но ничего делать не буду». Совершенно другое дело, когда отец с сыном находились в позиции понимания произошедшего и у сына была возможность понять, что можно сделать с произошедшим... Когда окно в школе было разбито, а бюджет карманных расходов был урезан на сумму стоимости нового стекла, сын задал своему отцу вопрос:</p><p>«Как мне нужно было поступить с тем парнем из параллели который пытался меня оскорбить? Я должен был промолчать или пойти на конфликт?»",
			'ways': [{
				'text': "Промолчать",
				'target': 'l8n1',
				},{
				'text': "Пойти на конфликт",
				'target': 'l8n2',
			}],
		},
		'l8n1': {
			'title': "Промолчать",
			'text': "- Конечно, ты должен был промолчать!, ответил отец. Неужели, лишиться для тебя стоимости трёх обедов в школе равносильно тему, что бы сделать вид, что ты просто не услышал?! - сокрушался его отец. Как упоминалось раньше наш герой рос без отца, а тот в свою очередь тоже имел проблемы со своим родителем. Таким образом по мужской линии рода была прервана передача мужского принципа, который так необходим мужчине, того принципа, который на Корню рубят авторы законов современной ювенальной юстиции. Проблема была в том, что наш герой плохо изучал лекции Родительского Университета и упустил возможность изучения принципа за пределами родовой системы.",
			'ways': [{
				'text': "Продолжить",
				'target': 'l5',
			}],
		},
		'l8n2': {
			'title': "Конфликт",
			'text': "Конфликт для мальчика это зона роста. В конфликте всегда проясняется истина. И упустить такую возможность в начальных классах школы, да ещё и защищая свою честь на глазах у всей параллели и дам- было просто недопустимо. Новенький мальчик из параллели был крупнее и физически выглядел более развитым. Сын главного героя был настолько уверен в себе, что его хватка была непоколебима, он четко знал о мужском принципе, который был передан ему его отцом и в жилах бурлила не просто кровь, а родовая сила, которая и позволила ему справится с грубияном, пусть и ценой разбитого стекла, за которое он даже не знал как будет рассчитываться. Это был не мальчик, но муж. Понимая свою ответственность он ещё и рассчитывал на собственную платёжеспособность.",
			'ways': [{
				'text': "Продолжить",
				'target': 'end',
			}],
		},
		'end': {
			'title': "Заключительная часть",
			'text': "Таким образом, совсем юные студенты, иногда не имеющие даже связи с собственными родителями или наоборот слишком тесно связанные с ними настолько, что не могут познать Жизнь самостоятельно имеют прекрасную возможность для обучения азам гуманной педагогики в Родительском Университете. Гуманная Педагогика это фундамент образовательной системы современного общества и отличное подспорье до создания крепкой и здоровой семьи! Ждём Вас, дорогой абитуриент в нашей полной Света аудитории экзаменационной комиссии...",
		},

		// '': {
		// 	'title': "",
		// 	'text': "",
		// 	'ways': [{
		// 		'text': "",
		// 		'target': '',
		// 		},{
		// 		'text': "",
		// 		'target': '',
		// 	}],
		// },
	}

})();
