<script>
  let q = "";
  function handleInput(e) {
    e.stopPropagation();
    q = e.target.value;
  }

  function bing(e) {
    e.preventDefault();
    window.location.href = `https://cn.bing.com/search?q=${encodeURIComponent(
      q
    )}`;
  }

  function google(e) {
    e.preventDefault();
    window.location.href = `https://www.google.com/search?newwindow=1&safe=strict&q=${encodeURIComponent(
      q
    )}&cad=h`;
  }
</script>

<style>
  main {
    position: relative;
    text-align: center;
    padding: 1em;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .operation {
    margin-top: 20px;
  }

  .operation .btn {
    color: #666;
  }

  .icon {
    display: inline-block;
    height: 20px;
    width: 20px;
  }

  svg.query {
    display: block;
    height: 100%;
    width: 100%;
  }

  form {
    position: absolute;
    top: 20%;
    width: 300px;
  }

  .logo-wrap {
    margin-bottom: 20px;
  }
  .logo {
    width: 90px;
    height: auto;
  }

  .form-control:focus {
    border-color: rgb(206, 212, 218);
    box-shadow: none;
  }

  button:first-child {
    margin-right: 16px;
  }

  @media screen and (min-width: 480px) {
    form {
      width: 360px;
    }
    .logo {
      width: 100px;
    }
  }

  @media screen and (min-width: 576px) {
    form {
      width: 460px;
    }
    .logo {
      width: 118px;
    }
  }

  @media screen and (min-width: 768px) {
    form {
      width: 520px;
    }
    .logo {
      width: 140px;
    }
  }

  @media screen and (min-width: 992px) {
    form {
      width: 600px;
    }
    .logo {
      width: 160px;
    }
  }

  @media screen and (min-width: 1200px) {
    .logo {
      width: 180px;
    }
  }
</style>

<svelte:head>
  <title>Bingo</title>
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1,
    user-scalable=no" />
  <link
    rel="stylesheet"
    href="https://cdn.staticfile.org/twitter-bootstrap/4.4.1/css/bootstrap.min.css" />
</svelte:head>

<main>
  <form>
    <div class="logo-wrap">
      <img class="logo" src="./logo.svg" alt="logo" />
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">
          <span class="icon">
            <svg
              class="query"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0
                9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49
                19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14
                9.5 11.99 14 9.5 14z" />
            </svg>
          </span>
        </span>
      </div>
      <input
        type="text"
        on:input={handleInput}
        class="form-control query-input"
        aria-describedby="basic-addon1" />
    </div>
    <div class="operation">
      <button class="btn btn-light" on:click={bing}>Bing</button>
      <button class="btn btn-light" on:click={google}>Google</button>
    </div>
  </form>
</main>
