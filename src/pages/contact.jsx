const Contact = () => {
  return (
    <section className="mt-40">
      <div className="container">
        <form className="flex flex-col gap-5 bg-gray-50 p-5 rounded-lg">
          <label htmlFor="name" className="text-2xl font-normal">
            Ism
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ismingizni kiriting"
            className="p-4 border-[1px] border-b-slate-500 rounded-lg"
            required
          />

          <label htmlFor="phone" className="text-2xl font-normal">
            Telefon
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="+998 99 999 99 99"
            className="p-4 border-[1px] border-b-slate-500 rounded-lg"
            required
          />

          <label htmlFor="message" className="text-2xl font-normal">
            Xabar
          </label>
          <textarea
            placeholder="Xabaringizni kiriting"
            className="p-4 border-[1px] border-b-slate-500 rounded-lg resize-none "
            required
            id="message"
            rows={5}
            minLength={10}
          ></textarea>

          <button
            type="submit"
            className="bg-slate-900 text-white py-4 rounded-lg hover:bg-slate-700 transition"
          >
            Yuborish
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
