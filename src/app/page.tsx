import "./styles.css";

const FormPage = () => {
  return (
    <div>
      <h1>Auto Complete Test</h1>

      <p>姓</p>
      <input autoComplete="family-name" />

      <p>名</p>
      <input autoComplete="given-name" name="last-name" />

      <p>セイ</p>
      <input autoComplete="phonetic-family-name" />

      <p>メイ</p>
      <input autoComplete="phonetic-given-name" />

      <p>郵便番号</p>
      <input autoComplete="postal-code" />

      <p>都道府県</p>
      <select autoComplete="address-level1">
        <option>選択</option>
        <option value="13">東京都</option>
        <option value="14">神奈川県</option>
      </select>

      <p>市区町村</p>
      <input autoComplete="address-level2" />

      <p>町名・番地</p>
      <input autoComplete="address-line1" name="address-line1" />

      <p>建物名・部屋番号（任意）</p>
      <input autoComplete="address-line2" name="address-line2" />

      <p>電話番号</p>
      <input autoComplete="tel" />

      <p>メールアドレス</p>
      <input autoComplete="email" />

      <div>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default FormPage;
