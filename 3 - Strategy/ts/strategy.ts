interface Strategy {
    login(user: string, password: string): boolean;
}

class LoginContext {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    login(user: string, password: string): boolean {
        return this.strategy.login(user, password);
    }
}

class LoginDBStrategy implements Strategy {
    login(user: string, password: string): boolean {
        // ...
        console.log('Login with DB');
        return (user === 'admin' && password === 'admin');
    }
}

class LoginServiceStrategy implements Strategy {
    login(user: string, password: string): boolean {
        // ...
        console.log('Login with Service');
        return (user === 'admin' && password === '123123');
    }
}


const auth = new LoginContext(new LoginDBStrategy());
console.log(auth.login('admin', 'admin'));

auth.setStrategy(new LoginServiceStrategy());
console.log(auth.login('admin', '123123'));
