<div class="content">
    <nav>
        <span class="company-title">Company Name</span>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact Us</a></li>
        </ul>
        <div>
            <a href="/login">Login</a>
        </div>
    </nav>

    <slot></slot>
</div>

<style>

    .content {
        padding: 20px 10px;
    }

    nav {
        margin: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    ul {
        list-style-type: none;
        display: flex;
        gap: 60px;
    }

    a {
        text-decoration: none;
        color: black;
    }

    a:hover {
        text-decoration: underline;
    }

    .company-title {
        font-size: large;
        font-weight: bold;
    }
</style>