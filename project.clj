(defproject visualizing_category_theory "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [quil "2.6.0"]
                 [com.cemerick/piggieback "0.2.1"]
                 [org.clojure/clojurescript "1.9.473"]]

  :plugins [[lein-cljsbuild "1.1.5"]]
  :hooks [leiningen.cljsbuild]

  :cljsbuild
  {:builds [{:source-paths ["src"]
             :compiler
             {:output-to "js/main.js"
              :output-dir "out"
              :main "visualizing_category_theory.core"
              :optimizations :none
              :pretty-print true}}]}
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]})
