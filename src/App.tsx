import React from "react";
import "./App.css";

function App() {
  return (
    <div className="bg-slate-50 flex flex-col">
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h1 className="text-5xl font-bold text-center">Privacy</h1>

        <p className="mt-10 text-lg text-center">
          Son güncellenme: 13/04/2023<br></br> <br></br>
          Güvenliğiniz bizim için önemli. Bu sebeple bizimle paylaşacağınız
          kişisel verileriz hassasiyetle korunmaktadır.<br></br> <br></br>
          Biz, Nutriconn, veri sorumlusu olarak, bu gizlilik ve kişisel
          verilerin korunması politikası ile, hangi kişisel verilerinizin hangi
          amaçla işleneceği, işlenen verilerin kimlerle ve neden
          paylaşılabileceği, veri işleme yöntemimiz ve hukuki sebeplerimiz ile;
          işlenen verilerinize ilişkin haklarınızın neler olduğu hususunda
          sizleri aydınlatmayı amaçlıyoruz.
        </p>
        <h1 className="text-2xl font-bold mt-5">
          Toplanan Kişisel Verileriniz, Toplanma Yöntemi ve Hukuki Sebebi
        </h1>
        <p className="mt-5 text-lg leading-8">
          IP adresiniz ve kullanıcı aracısı bilgileriniz, sadece analiz yapmak
          amacıyla ve çerezler (cookies) vb. teknolojiler vasıtasıyla, otomatik
          veya otomatik olmayan yöntemlerle ve bazen de analitik sağlayıcılar,
          reklam ağları, arama bilgi sağlayıcıları, teknoloji sağlayıcıları gibi
          üçüncü taraflardan elde edilerek, kaydedilerek, depolanarak ve
          güncellenerek, aramızdaki hizmet ve sözleşme ilişkisi çerçevesinde ve
          süresince, meşru menfaat işleme şartına dayanılarak işlenecektir.
        </p>
        <h1 className="text-2xl font-bold  mt-5">
          Kişisel Verilerinizin İşlenme Amacı
        </h1>
        <p className="mt-5 text-lg">
          Bizimle paylaştığınız kişisel verileriniz sadece analiz yapmak
          suretiyle; sunduğumuz hizmetlerin gerekliliklerini en iyi şekilde
          yerine getirebilmek, bu hizmetlere sizin tarafınızdan ulaşılabilmesini
          ve maksimum düzeyde faydalanılabilmesini sağlamak, hizmetlerimizi,
          ihtiyaçlarınız doğrultusunda geliştirebilmek ve sizleri daha geniş
          kapsamlı hizmet sağlayıcıları ile yasal çerçeveler içerisinde
          buluşturabilmek ve kanundan doğan zorunlulukların (kişisel verilerin
          talep halinde adli ve idari makamlarla paylaşılması) yerine
          getirilebilmesi amacıyla, sözleşme ve hizmet süresince, amacına uygun
          ve ölçülü bir şekilde işlenecek ve güncellenecektir.
        </p>

        <h1 className="text-2xl font-bold  mt-5">
          {" "}
          Toplanan Kişisel Verilerin Kimlere ve Hangi Amaçlarla Aktarılabileceği
        </h1>
        <p className="mt-5 text-lg leading-8">
          Bizimle paylaştığınız kişisel verileriniz; faaliyetlerimizi yürütmek
          üzere hizmet aldığımız ve/veya verdiğimiz, sözleşmesel ilişki
          içerisinde bulunduğumuz, iş birliği yaptığımız, yurt içi ve yurt
          dışındaki 3. şahıslar ile kurum ve kuruluşlara ve talep halinde adli
          ve idari makamlara, gerekli teknik ve idari önlemler alınması koşulu
          ile aktarılabilecektir.
        </p>

        <h1 className="text-2xl font-bold  mt-5">
          Kişisel Verileri İşlenen Kişi Olarak Haklarınız
        </h1>
        <p className="mt-5 text-lg leading-8">
          KVKK madde 11 uyarınca herkes, veri sorumlusuna başvurarak aşağıdaki
          haklarını kullanabilir: Kişisel veri işlenip işlenmediğini öğrenme,
          Kişisel verileri işlenmişse buna ilişkin bilgi talep etme, Kişisel
          verilerin işlenme amacını ve bunların amacına uygun kullanılıp
          kullanılmadığını öğrenme, Yurt içinde veya yurt dışında kişisel
          verilerin aktarıldığı üçüncü kişileri bilme, Kişisel verilerin eksik
          veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,
          Kişisel verilerin silinmesini veya yok edilmesini isteme, (e) ve (f)
          bentleri uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı
          üçüncü kişilere bildirilmesini isteme, İşlenen verilerin münhasıran
          otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin
          kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme, Kişisel
          verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması
          hâlinde zararın giderilmesini talep etme, haklarına sahiptir. Yukarıda
          sayılan haklarınızı kullanmak üzere email@site.com üzerinden bizimle
          iletişime geçebilirsiniz.
        </p>

        <h1 className="text-2xl font-bold  mt-5"> İletişim</h1>
        <p className="mt-5 text-lg leading-8">
          Sizlere hizmet sunabilmek amaçlı analizler yapabilmek için, sadece
          gerekli olan kişisel verilerinizin, işbu gizlilik ve kişisel verilerin
          işlenmesi politikası uyarınca işlenmesini, kabul edip etmemek
          hususunda tamamen özgürsünüz. Siteyi kullanmaya devam ettiğiniz
          takdirde kabul etmiş olduğunuz tarafımızca varsayılacak olup, daha
          ayrıntılı bilgi için bizimle info@nutriconn.com e-mail adresi
          üzerinden iletişime geçmekten lütfen çekinmeyiniz.
        </p>
      </div>
    </div>
  );
}

export default App;
